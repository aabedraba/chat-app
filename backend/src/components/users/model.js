const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    name: String,
})

const model = mongoose.model('users', messageSchema);

module.exports = model;