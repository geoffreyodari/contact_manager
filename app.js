// Importing express package
const express = require('express');
const mongoose = require('mongoose');

// Initializing express
const app = express();

// Setting a static folder
app.use(express.static('public'));
let viewRouter = require('./routes/view_routes');

// Set up a view engine
app.set('view engine', 'ejs');

// Routes
app.use('/view', viewRouter);

// Connecting to the Database
let mongodb_url = 'mongodb://127.0.0.1:27017/';
let dbName = 'contacts_manager';
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