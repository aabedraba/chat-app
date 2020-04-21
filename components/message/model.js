const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    user: {
        type: Schema.ObjectId, 
        ref: 'users'
    },
    message: {
        type: String,
        required: true
    },
    date: Date,
    file: String
})

const model = mongoose.model('messages', messageSchema);

module.exports = model;