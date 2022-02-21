// View page router
const express = require('express');
const router = express.Router();
const contacts = require('../models/view_models');

router.get('/', (req,res)=>{
    contacts.find({}, (error, contact_manager)=>{
        if (error){
            console.log(error);
        }else{
            //console.log(contact_manager)
            res.render("viewcontacts", { contacts: contact_manager, msg: req.query.msg })
        }
    })
 })

 // DELETE USER
router.get('delete/(:id)', function(req, res, next) {
    contacts.findByIdAndRemove(req.params.id, (err, contact_manager) => {
        if (!err) {
            res.redirect('/view');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
})

module.exports = router;