const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref: 'users'
    }]
})

const model = mongoose.model('Chat', messageSchema);

module.exports = model;