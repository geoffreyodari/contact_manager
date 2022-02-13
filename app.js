// Importing express package
const express = require('express');
// Importing packages for handling post requet data
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();


// Initializing express
const app = express();

// Setting a static folder
app.use(express.static('public'));

// handling add contact request
app.post('/add',(req,res)=>{
               res.send("<p>Contact added</p>")
      }
   )

// Defining the port number
const PORT = 5000;

app.listen(PORT, ()=>{
   console.log(`Server is listening on port ${PORT}`)
})