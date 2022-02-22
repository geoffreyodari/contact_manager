// View page router
const express = require('express');
const router = express.Router();
const contacts = require('../models/view_models');



  //route to handle editing of contacts
  router.get('/',(req,res)=>{
    contacts.find(req.query, (error, contact)=>{
        if (error){
            console.log(error);
        }else{
            console.log(contact)
            res.render("editcontact", { contact:contact[0] })
        }
    })
})

module.exports = router;