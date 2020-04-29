import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import Form from '../../components/Form'
import { getChatId, fetchMessage, getUserName } from '../../store'
import {useState, useEffect} from 'react'

function Chat(props) {
    const [data, setData] = useState([{}])

    useEffect(() => {
        async function getMessages(userId) {
            const chatId = await getChatId(userId)
            const messageData = await fetchMessage(chatId);
            setData(messageData.body.map(element => {
                return {
                    id: element._id,
                    message: element.message,
                    userName: element.user.name
                }
            }))
        }

        getMessages(props.userId)
       
      }, []);

    
    if (!data) return 'Loading...'
    return (
        <Layout >
            <Messages messageList={data} userName={props.userName}/>
            <Form userName={props.userName} userId={props.userId} chatId={props.chatId} />
        </Layout>
    )
}

Chat.getInitialProps = async function (context) {
    const userId = context.query.id
    const userName = await getUserName(userId)
    const chatId = await getChatId(userId)
    return {
        userName,
        userId,
        chatId
    }
}

export default Chat;