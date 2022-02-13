const express = require('express');


const router = express.Router()




router.get('/',(req,res)=>{
    res.render('index')
})


//route to handle saving of contacts
 router.post('/add',(req,res)=>{

     res.send("<h5>Contact added!</h5>")
 })

 module.exports = router