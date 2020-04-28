async function fetchMessage(chatId) {
    return fetch(`https://next-chat-app-aabedraba.herokuapp.com/message?chat=${chatId}`)
        .then(res => res.json())
}

async function getChatId(userId) {
    return await fetch(`https://next-chat-app-aabedraba.herokuapp.com/chat/${userId}`)
        .then(res => res.json())
        .then(data => data.body[0]._id)
}

async function getUserName(userId) {
    const res = await fetch('https://next-chat-app-aabedraba.herokuapp.com/user')
    const data = await res.json()
    const user = data.body.find(element => element._id === userId)
    return user.name;
}

async function storeMessage({message, chatId, userId}) {
    const messageToStore = {
        message, 
        chat: chatId,
        user: userId
    }
    const res = await fetch('https://next-chat-app-aabedraba.herokuapp.com/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageToStore)
    })
}

export {
    fetchMessage,
    getChatId,
    storeMessage,
    getUserName
}