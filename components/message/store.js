const Model = require('./model');

function addMessage(message) {
    const modeledMessage = new Model(message);
    modeledMessage.save();
}

async function getMessage(filterUser, filterChat) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser != null){
            filter = { user: filterUser }
        }
        if (filterChat != null){
            filter = { chat: filterChat }
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error){
                    reject(error);
                    return false;
                }

                resolve(populated);
            })
    })
   
}

async function updateMessage(id, message){
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateMessage: updateMessage,
    remove: removeMessage
}