// Import express package
const express = require('express');

// Initialize express
const app = express();

// Set a static folder
app.use(express.static('public'));

// Define the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
})