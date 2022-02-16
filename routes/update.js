const express = require('express');
const Contact = require('../models/contacts')

const router = express.Router()


//route to handle saving of contacts
 router.post('/',(req,res)=>{
     
     let data = req.body
     let filter = { _id: data["_id"]};
     let update = {
                    firstname: data.firstname,
                    othernames: data.othernames,
                    phone: data.phone,
                    email: data.email
                }
                
    //Update Contact and redirect to view contact
     Contact.updateOne(filter,{$set:update},{upsert:true},(err,success)=>(err)?res.send(err):res.redirect("/view"))
     
 })

 module.exports = router