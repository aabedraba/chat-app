import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import { getChatId, fetchMessage, storeMessage, getUserName } from '../../store'
import { useState } from 'react'

function Chat(props) {
    const userName = props.userName
    const userId = props.userId
    const chatId = props.chatId
    const [messageList, setMessageList] = useState(props.messageList)
    const [messageCount, setMessageCount] = useState(0)
    const [newMessage, setNewMesage] = useState('');

    const handleChange = (e) => { setNewMesage(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
        storeMessage({ message: newMessage, chatId, userId })
        setMessageList(() => [...messageList,
        {
            id: messageCount,
            message: newMessage,
            userName: userName
        }])
        setMessageCount(messageCount + 1)
        setNewMesage('')
    }

    return (
        <Layout >
            <Messages messageList={messageList} />
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newMessage}></input>
                <button type="submit" value="Submit">Send</button>
            </form>
            <style jsx>{`
                form {
                    background-color: #fff;
                    display: flex;
                    height: 32px;
                    position: fixed;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    width: 100%;
                }
                form input {
                    width: 90%;
                }
                form button {
                    width: 10%;
                }
            `}</style>
        </Layout>
    )
}

Chat.getInitialProps = async function (context) {
    const userId = context.query.id
    const userName = await getUserName(userId)
    const chatId = await getChatId(userId)
    const messageData = await fetchMessage(await chatId);
    const messageList = await messageData.body.map(element => {
        return {
            id: element._id,
            message: element.message,
            userName: "Abdallah"
        }
    })
    return {
        userName,
        userId,
        chatId,
        messageList
    }
}

export default Chat;