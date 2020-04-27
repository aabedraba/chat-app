import Layout from '../../components/Layout'
import Messages  from '../../components/Messages'
import { getChatId } from '../../utils'
import { useState } from 'react'

function Chat(props) {
    const userId = props.userId;
    const chatId = props.chatId;
    const [newMessage, setNewMesage] = useState('');
    
    const handleChange = (e) => {setNewMesage(e.target.value)}
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage(newMessage, chatId, userId)
        setNewMesage('')
    }

    return (
        <Layout >
            <Messages userId={userId} />
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={handleChange} value={newMessage}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </Layout>
    )
}

Chat.getInitialProps = async function(context) {
    return {
        userId: context.query.id,
        chatId: await getChatId(context.query.id)
    }
}

export default Chat;