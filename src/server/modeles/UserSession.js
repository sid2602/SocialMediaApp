const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        default: Date.now()
    },
    
})

module.exports = mongoose.model('UserSession',schema);