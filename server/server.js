// NOTES
// This file imports the Mongoose and MongoDB connection (from /config/connection.js)
const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Listen for the connection here
// Upon a successful connection, we start the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Backend server on port ${PORT}`);
  });
});