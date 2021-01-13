// require express
const express = require('express');

// create an express app instance
const app = express();
const PORT = 5000;

// set up a static server
app.use(express.static('server/public'));

// Start up server on specific port
app.listen(PORT, function() {
    console.log(`Listening at http://localhost:${PORT}`);
});