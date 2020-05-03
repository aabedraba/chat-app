import Layout from '../components/Layout'
import Messages from '../components/Messages'
import Form from '../components/Form'
import { getChatId, fetchMessage, getUserName } from '../lib/store'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Chat() {
    const router = useRouter()
    const userId = router.query.user
    const [data, setData] = useState([{}])
    const [userName, setUserName] = useState('')
    const [chatId, setChatId] = useState('')
    
    useEffect(() => {   
        getUserName(userId).then(name => setUserName(name))
        getChatId(userId).then(id => setChatId(id))
        fetchMessage(chatId).then(res => setData(res.body.map(
            element => {
                return {
                    id: element._id,
                    message: element.message,
                    userName: element.user.name
                }

            })))

    }, []);

    return (
        <Layout >
            <Messages messageList={data} userName={userName} />
            <Form userId={userId} chatId={chatId} />
        </Layout>
    )
}

export default Chat;