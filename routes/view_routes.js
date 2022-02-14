// View page router
const express = require('express');
const router = express.Router();
const contact_manager = require('../models/view_models');

router.get('/', (req,res)=>{
    contact_manager.find({}, (error, contacts)=>{
        if (error){
            console.log(error);
        }else{
            res.render('viewcontacts', { contacts:contacts, msg: req.query.msg});
        }
    })
 })

module.exports = router;