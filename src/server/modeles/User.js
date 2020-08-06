const mongoose  = require('mongoose');
const { string } = require('yup');
const Schema = mongoose.Schema;

const User = new Schema({
    
    username:String,
    brithday:Date,
    city:String,
    image:{
        type: String,
        default: 'uploads/zdj.jpg'
    },
    email: String,
    password: String,
})

module.exports = mongoose.model('User',User);