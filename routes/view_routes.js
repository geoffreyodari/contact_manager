// View page router
const express = require('express');
const router = express.Router();
const contacts = require('../models/view_models');

router.get('/', (req,res)=>{
    contacts.find({}, (error, contact_manager)=>{
        if (error){
            console.log(error);
        }else{
            console.log(contact_manager)
            res.render("viewcontacts", { contacts: contact_manager, msg: req.query.msg })
        }
    })
 })

module.exports = router;