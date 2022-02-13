// Importing express package
const express = require('express');
// Importing packages for handling post request 
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

let indexRouter = require('./routes/index');

// Initializing express
const app = express();

// Set a static folder
app.use(express.static('public'));

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