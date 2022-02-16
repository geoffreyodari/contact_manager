// Importing express package
const express = require('express');

// Importing packages for handling post request 
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

//Importing mongoose package
const mongoose = require('mongoose');

let indexRouter = require('./routes/index');

let mongodbUrl = 'mongodb://127.0.0.1:27017/';
let dbName = 'contact_manager';
mongoose.connect(mongodbUrl+dbName)
let db = mongoose.connection;

// Initializing express
const app = express();

// Set a static folder
app.use(express.static('public'));
let viewRouter = require('./routes/view_routes');

// Set up a view engine
app.set('view engine', 'ejs');

// Routes
app.use('/view', viewRouter);

// Check Connection
db.once('open', ()=>{
   console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
   console.log(error);
})

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// handling add contact request
app.use('/',indexRouter)

app.use('/add',indexRouter)
// Defining the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
})