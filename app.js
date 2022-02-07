// Import express framework
const express = require('express');

// Initiating express
const app = express();

// Define the port number
const port = 5000;

app.listen(port, function(){
   console.log(`Server is listening on port ${port}`)
})