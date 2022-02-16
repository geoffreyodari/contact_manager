// View page router
const express = require('express');
const router = express.Router();
const contacts = require('../models/view_models');



  //route to handle editing of contacts
  router.get('/',(req,res)=>{
   
    res.render("editcontact")

})

module.exports = router;