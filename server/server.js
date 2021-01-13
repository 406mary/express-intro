// require express
const express = require('express');

// create an express app instance
const app = express();
const PORT = 5000;

// set up a static server
app.use(express.static('server/public'));

// GET /hello 
// sending to the /hello endpoint and defining it
app.get('/hello', (req, res) => {
    // we always have to send a response to the browser
    // you can send anything that is a valid javascript object
    // never send numbers directly, they are treated as error codes
    // incoming is req
    // send back is res
    console.log(req);
    res.send('hello world');
})

// Start up server on specific port
app.listen(PORT, function() {
    console.log(`Listening at http://localhost:${PORT}`);
});