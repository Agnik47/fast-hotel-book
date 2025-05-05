const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fallbackPorts = [5001, 5002, 5003, 5004, 5005, 5006, 5007, 5008, 5009, 5010];
let currentPort = port;
let serverStarted = false;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hotel Booking Backend is running!');
});

// Start the server with fallback ports
function startServer(ports, index = 0) {
  if (index >= ports.length) {
    console.error('All attempted ports are in use. Please specify a different port via PORT environment variable.');
    process.exit(1);
  }

  const p = ports[index];
  app.listen(p, () => {
    console.log(`Server successfully started and running on port ${p}`);
    serverStarted = true;
    currentPort = p;
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${p} is in use, trying next port...`);
      startServer(ports, index + 1);
    } else {
      console.error(`Failed to start server on port ${p} due to error:`, err);
      process.exit(1);
    }
  });
}

startServer([currentPort, ...fallbackPorts]);