async function fetchMessage(url) {
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            const chatId = data.body[0]._id
            return fetch(`https://next-chat-app-aabedraba.herokuapp.com/message?chat=${chatId}`)
        })
        .then(res => res.json())
}

async function getChatId(userId) {
    return await fetch(`https://next-chat-app-aabedraba.herokuapp.com/chat/${userId}`)
        .then(res => res.json())
        .then(data => data.body[0]._id)
}

async function storeMessage(messageToStore) {
    console.log("Sending message")
    const res = await fetch('http://localhost:3001/message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(messageToStore)
    })
    console.log(res.json())
}

export {
    fetchMessage,
    getChatId,
    storeMessage
}