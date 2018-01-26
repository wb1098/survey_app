const mongoose = require('mongoose');

const { Schema} = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded : {type: Boolean, default : false},
    respondedDate : {type: Date, default : Date.now}    
});

module.exports = recipientSchema;
