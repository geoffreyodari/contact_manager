// Importing express package
const express = require('express');
const mongoose = require('mongoose');

// Initializing express
const app = express();

// Setting a static folder
app.use(express.static('public'));

// Connecting to the Database
let mongodb_url = 'mongodb://localhost/';
let dbName = 'contact_manager';
mongoose.connect(mongodb_url + dbName,)
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

// Defining the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
})