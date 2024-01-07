const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');

const PORT = process.env.PORT || 8080;

const app = express();

// Enable CORS for all routes
app.use(cors());

// Enable logging with morgan middleware
app.use(morgan('dev'));

// Enable body parser to accept JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add router to the server and name it 'openai'
app.use('/openai', require('./router'));

// Error handling for server startup
app.listen(PORT, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
    process.exit(1); // Exit the process if there's an error during startup
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});

// Export the express app
module.exports = app;