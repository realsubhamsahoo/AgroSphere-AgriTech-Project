// models/FarmData.js

const mongoose = require('mongoose');

const farmDataSchema = new mongoose.Schema({
  location: String,
  soilHealth: String,
  groundwaterLevel: String,
  climate: String,
  pollution: String,
  // Add more fields as needed
});

const FarmData = mongoose.model('FarmData', farmDataSchema);

module.exports = FarmData;
