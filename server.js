// server.js
require('dotenv').config();
const express = require('express');
const app = express();
// Use the PORT provided by Render or default to 3000
const PORT = process.env.PORT || 3000;
// Basic route to verify the server is running
app.get('/', (req, res) => {
  res.send('Shopify App is Running!');
});
// Start the server listening on all available interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}`);
});
