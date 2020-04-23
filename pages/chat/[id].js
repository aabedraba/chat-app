import Layout from "../../components/Layout";
import fetch from 'node-fetch'
import React from 'react'

function Messages({ listMessage }) {
    return (
        listMessage.map(message =>
            <p key={message.id}>{message.content}</p>)
    )
}

class Chat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            messageToSend: '',
            listMessage: props.data.map(
                element => {
                    return {
                        id: element._id,
                        content: element.message
                    }
                }),
            chatId: props.chatId
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async event =>  {
        event.preventDefault();
        const message = {
            user: '5e9ea90cfed6f3014107081c',
            chat: this.state.chatId,
            message: this.state.messageToSend
        }
        const res = await fetch('http://localhost:3001/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
        const data = await res.json();
        const newMessage = {
            id: data.body.id,
            content: this.state.messageToSend
        }
        this.setState({listMessage: [...this.state.listMessage, newMessage]})
        this.setState({messageToSend: ''})
    }

    handleChange = event => {
        this.setState({messageToSend: event.target.value})
    }

    render() {
        return (
            <Layout>
                <div>
                    <Messages listMessage={this.state.listMessage} />
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} value={this.state.messageToSend}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                <style jsx>{`
                    div{
                        text-align: center
                    }
                `}</style>
            </Layout>
        )
    }
}

async function getMessages(chatId) {
    const res = await fetch(`http://localhost:3001/message?chat=${chatId}`);
    const data = await res.json();
    return data.body;
}

Chat.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:3001/chat/${id}`);
    const chats = await res.json();
    const chatId = chats.body[0]._id;
    return {
        data: await getMessages(chatId),
        chatId
    }
}

export default Chat;