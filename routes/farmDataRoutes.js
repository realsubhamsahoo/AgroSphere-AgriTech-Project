// routes/farmDataRoutes.js

const express = require('express');
const router = express.Router();
const FarmData = require('../models/FarmData');

// Get all farm data
router.route('/farmData').get(async (req, res) => {
  try {
    const data = await FarmData.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add new farm data
router.route('/farmData/add').post(async (req, res) => {
  try {
    const newFarmData = new FarmData(req.body);
    await newFarmData.save();
    res.json('Farm data added!');
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Bad Request' });
  }
});

// Get specific farm data by ID
router.route('/farmData/:id').get(async (req, res) => {
  try {
    const data = await FarmData.findById(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update farm data by ID
router.route('/farmData/update/:id').post(async (req, res) => {
  try {
    const data = await FarmData.findById(req.params.id);
    if (!data) {
      res.status(404).json({ error: 'Data not found' });
    } else {
      data.location = req.body.location;
      data.soilHealth = req.body.soilHealth;
      data.groundwaterLevel = req.body.groundwaterLevel;
      data.climate = req.body.climate;
      data.pollution = req.body.pollution;

      await data.save();
      res.json('Farm data updated!');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete farm data by ID
router.route('/farmData/delete/:id').delete(async (req, res) => {
  try {
    await FarmData.findByIdAndDelete(req.params.id);
    res.json('Farm data deleted!');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
