// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/agrosphereDB');

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Routes
const farmDataRoutes = require('./routes/farmDataRoutes');
app.use('/api', farmDataRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
