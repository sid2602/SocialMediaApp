const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    userData:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: new Date()
    },
    text: String,
    likes: {
        type: Number,
        default: 0
    },
})

module.exports = mongoose.model('Post',Post)