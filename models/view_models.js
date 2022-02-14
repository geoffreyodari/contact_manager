const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
var ViewSchema = new Schema({
    firstname: String,
    othernames: String,
    phone: String,
    email: String,
    date: {type: Date, default: Date() }

});

// convert the schema into a Model
var contact_manager = mongoose.model('contact_manager', ViewSchema);
module.exports = contact_manager;
