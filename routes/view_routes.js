// View page router
const express = require('express');
const router = express.Router();
const contact = require('../models/contacts');

router.get('/', (req,res)=>{
    contact.find({}, (error, contact_manager)=>{
        if (error){
            console.log(error);
        }else{
            res.render("viewcontacts", { contacts: contact_manager, msg: req.query.msg })
        }
    })
 })

// Delete record
router.delete('/:id', (req,res)=>{
    contact.findByIdAndRemove({_id:req.params.id}, (error)=>{
        if (error){
            console.log(error)
        }
        res.send('Success')
    })
 })

module.exports = router;