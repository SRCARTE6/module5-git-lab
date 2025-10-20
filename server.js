// server.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware');

const app = express();

// Use the custom logger middleware
app.use(loggerMiddleware);

// Basic test route
app.get('/', (req, res) => {
  res.send('Hello from the middleware lab!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});