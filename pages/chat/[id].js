import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import { getChatId, fetchMessage, storeMessage } from '../../utils'
import { useState } from 'react'

function Chat(props) {
    const userId = props.userId;
    const chatId = props.chatId;
    const [messageList, setMessageList] = useState(props.messageList)
    const [messageCount, setMessageCount] = useState(0)
    const [newMessage, setNewMesage] = useState('');
    
    const handleChange = (e) => { setNewMesage(e.target.value) }

    const handleSubmit = (e) => {
        e.preventDefault()
        setMessageList([...messageList, 
            { id: messageCount,
              message: newMessage  
            }])
        setMessageCount(messageCount + 1)
        storeMessage({message: newMessage, chatId, userId})
        setNewMesage('')
    }

    return (
        <Layout >
            <Messages messageList={messageList} />
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newMessage}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </Layout>
    )
}

Chat.getInitialProps = async function (context) {
    const userId = context.query.id
    const chatId = await getChatId(userId)
    const messageData = await fetchMessage(await chatId);
    const messageList = await messageData.body.map(element => {
        return {
            id: element._id,
            message: element.message
        }
    })
    return {
        userId,
        chatId,
        messageList
    }
}

export default Chat;