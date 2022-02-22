const express = require('express');
const Contact = require('../models/contacts')

const router = express.Router()




router.get('/',(req,res)=>{
    res.render('index')
})


//route to handle saving of contacts
 router.post('/add',(req,res)=>{
     let newContact = new Contact(req.body)
     console.log(newContact)
     newContact.save()
     res.redirect('/view')
 })

 module.exports = router