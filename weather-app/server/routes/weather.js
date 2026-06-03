const express = require('express');
const router = express.Router();
const axios = require('axios');
const Search = require('../models/Search');

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

// GET /api/weather/current?city=London
router.get('/current', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    let url;
    if (lat && lon) {
      url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
      url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    } else {
      return res.status(400).json({ error: 'Please provide city name or coordinates' });
    }

    const response = await axios.get(url);
    const data = response.data;

    // Save search to MongoDB
    try {
      await Search.create({
        city: data.name,
        country: data.sys.country,
        lat: data.coord.lat,
        lon: data.coord.lon
      });
    } catch (dbErr) {
      console.warn('DB save failed (non-critical):', dbErr.message);
    }

    res.json(data);
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({ error: 'City not found' });
    }
    if (err.response?.status === 401) {
      return res.status(401).json({ error: 'Invalid API key' });
    }
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// GET /api/weather/forecast?city=London
router.get('/forecast', async (req, res) => {
  try {
    const { city, lat, lon } = req.query;
    const apiKey = process.env.OPENWEATHER_API_KEY;

    let url;
    if (lat && lon) {
      url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    } else if (city) {
      url = `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`;
    } else {
      return res.status(400).json({ error: 'Please provide city name or coordinates' });
    }

    const response = await axios.get(url);
    res.json(response.data);
  } catch (err) {
    if (err.response?.status === 404) {
      return res.status(404).json({ error: 'City not found' });
    }
    res.status(500).json({ error: 'Server error', details: err.message });
  }
});

// GET /api/weather/history - fetch recent searches from MongoDB
router.get('/history', async (req, res) => {
  try {
    const history = await Search.find()
      .sort({ searchedAt: -1 })
      .limit(10)
      .lean();
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch history' });
  }
});

// DELETE /api/weather/history - clear history
router.delete('/history', async (req, res) => {
  try {
    await Search.deleteMany({});
    res.json({ message: 'History cleared' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to clear history' });
  }
});

module.exports = router;
