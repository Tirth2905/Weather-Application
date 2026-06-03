# 🌤️ MERN Weather App

A full-stack weather application built with **MongoDB, Express, React, and Node.js** that fetches real-time weather data from the OpenWeatherMap API.

---

## 📋 Features

- 🔍 Search weather by city name
- 🌡️ Current weather: temperature, humidity, wind, pressure, visibility
- 📅 5-day forecast
- 🗂️ Search history saved in MongoDB
- 📱 Fully responsive design
- 🌙 Clean dark UI

---

## ⚙️ Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/try/download/community) (optional — app works without it, history disabled)
- An [OpenWeatherMap API Key](https://openweathermap.org/api) (free tier works)

---

## 🚀 Setup & Run

### Step 1 — Get OpenWeatherMap API Key

1. Go to https://openweathermap.org/api
2. Sign up for a free account
3. Navigate to "API Keys" in your profile
4. Copy your API key

### Step 2 — Configure the Server

```bash
cd server
cp .env.example .env
```

Open `server/.env` and fill in:

```
OPENWEATHER_API_KEY=your_actual_api_key_here
MONGODB_URI=mongodb://localhost:27017/weatherapp
PORT=5000
```

### Step 3 — Install Dependencies

From the project root:

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### Step 4 — Run the App

Open **two terminals**:

**Terminal 1 — Start the backend:**
```bash
cd server
npm start
```
Server runs at http://localhost:5000

**Terminal 2 — Start the frontend:**
```bash
cd client
npm start
```
App opens at http://localhost:3000

---

## 📁 Project Structure

```
weather-app/
├── server/                  # Node.js + Express backend
│   ├── models/
│   │   └── Search.js        # MongoDB schema for search history
│   ├── routes/
│   │   └── weather.js       # API routes (/api/weather/*)
│   ├── .env.example         # Environment variable template
│   ├── index.js             # Server entry point
│   └── package.json
│
├── client/                  # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.js     # City search input
│   │   │   ├── WeatherCard.js   # Current weather display
│   │   │   ├── Forecast.js      # 5-day forecast
│   │   │   └── SearchHistory.js # Recent searches
│   │   ├── App.js           # Root component
│   │   ├── api.js           # Axios API service
│   │   └── index.js         # React entry
│   └── package.json
│
├── package.json             # Root scripts
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/weather/current?city=London` | Get current weather |
| GET | `/api/weather/forecast?city=London` | Get 5-day forecast |
| GET | `/api/weather/history` | Get recent searches |
| DELETE | `/api/weather/history` | Clear search history |
| GET | `/api/health` | Server health check |

---

## 🗄️ MongoDB (Optional)

The app runs fine without MongoDB — you'll just lose the search history feature. If MongoDB isn't running, the server logs a warning and continues normally.

To start MongoDB locally:
```bash
# macOS (Homebrew)
brew services start mongodb-community

# Windows
net start MongoDB

# Linux
sudo systemctl start mongod
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **M** | MongoDB + Mongoose |
| **E** | Express.js |
| **R** | React 18 |
| **N** | Node.js |
| **API** | OpenWeatherMap |

---

## 📝 Notes

- The free OpenWeatherMap tier allows 1,000 API calls/day — more than enough for personal use
- API keys may take a few minutes to activate after registration
- The `proxy` in `client/package.json` forwards `/api` requests to `localhost:5000`
