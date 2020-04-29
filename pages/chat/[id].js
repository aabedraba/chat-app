import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import Form from '../../components/Form'
import { getChatId, fetchMessage, getUserName } from '../../store'
import {useState, useEffect} from 'react'

function Chat(props) {
    const [data, setData] = useState([{}])
    const [userName, setUserName] = useState('')
    const [chatId, setChatId] = useState('')

    useEffect(() => {
        async function getChat(userId){
            setChatId(await getChatId(userId))
        }

        async function getMessages() {
            const messageData = await fetchMessage(chatId);
            setData(messageData.body.map(element => {
                return {
                    id: element._id,
                    message: element.message,
                    userName: element.user.name
                }
            }))
        }

        async function getName(userId){
            setUserName(await getUserName(userId))
        }

        getChat(props.userId)
            .then(getMessages())
            .then(getName(props.userId))
       
      }, []);

    
    if (!data) return 'Loading...'
    return (
        <Layout >
            <Messages messageList={data} userName={userName}/>
            <Form userId={props.userId} chatId={chatId} />
        </Layout>
    )
}

Chat.getInitialProps = async function (context) {
    return {
        userId: context.query.id
    }
}

export default Chat;