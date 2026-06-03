const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  city: {
    type: String,
    required: true,
    trim: true
  },
  country: String,
  lat: Number,
  lon: Number,
  searchedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Search', searchSchema);
