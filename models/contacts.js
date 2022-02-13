const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create a schema for a database

let ContactSchema = new Schema({
    firstname: String,
    othernames: String,
    phone: String,
    email: String

})

let Contact = mongoose.model('contact',ContactSchema)

module.exports = Contact