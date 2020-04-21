const mongoose = require('mongoose');
const config = require('../../config');
const Model = require('./model');

mongoose.connect('mongodb+srv://@cluster0-auda6.gcp.mongodb.net/test', {
    user: config.dbUser, 
    pass: config.dbPassword,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('DB Connected!'))
.catch(err => console.error('DB Connection error: ', err));

function addMessage(message) {
    const modeledMessage = new Model(message);
    modeledMessage.save();
}

async function getMessage() {
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage
    //get
    //update
    //delete
}