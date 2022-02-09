// Importing express package
const express = require('express');

// Initializing express
const app = express();

// Setting a static folder
app.use(express.static('public'));

// Defining the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
})