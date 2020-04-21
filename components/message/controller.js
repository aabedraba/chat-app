const store = require('./store');

function addMessage(user, message, chat, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message){
            console.error('[messageController] No user or message')
            reject('Incorrect data');
            return false;
        }

        let fileUrl = '';
        if (file){
            fileUrl = 'http://localhost:3000/app/files/' + file.filenase;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl
        };
    
        store.add(fullMessage)
        resolve(fullMessage);
    })
}

function getMessages(filterUser, filterChat) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser, filterChat))
    })
}

function updateMessage(id, message){
    return new Promise(async (resolve, reject) => {
        if (!id || !message){
            reject('Invalid data');
            return false;
        }
        const result = await store.updateMessage(id, message);

        resolve(result);
    })
}

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id){
            reject('No id sent');
            return false;
        }
        store.remove(id)
            .then(() => resolve())
            .catch(e => reject(e))
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}