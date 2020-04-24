import App from 'next/app'
import React from 'react'

function Messages(props) {
    // if (props.newMessage) addNewMessage(props.newMessage);
    return (
        <p>Hello world</p>
    )
}

// async function addNewMessage(newMessage) {
//     const messageToSend = {
//         user: '5ea1984a2a72a64a1ad5e118',
//         chat: newMessage.chatId,
//         message: newMessage.message
//     }
//     const res = await fetch('https://next-chat-app-aabedraba.herokuapp.com/message', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(messageToSend)
//     })
//     const data = await res.json();
// }

// async function getMessages(chatId) {
//     const res = await fetch(`https://next-chat-app-aabedraba.herokuapp.com/message?chat=${chatId}`);
//     const data = await res.json();
//     return data.body;
// }

// async function getUserName(userId){
//     const res = await fetch(`https://next-chat-app-aabedraba.herokuapp.com/user`);
//     const data = await res.json();
//     const userName = data.body.find(element => element._id === userId);
//     return userName; 
// }

Messages.getInitialProps = async function(appContext){
    const appProps = await App.getInitialProps(appContext)
    console.log(appProps);
    console.log("Hello props")
    return {
        props:{
            data: 'hello world'
        }
    };
}

export default Messages; 