import socketIOClient from "socket.io-client";

function socketIO(){
    return socketIOClient('https://nodejs-chat-backend.herokuapp.com');
}

export {
    socketIO
}