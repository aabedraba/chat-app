import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import Form from '../../components/Form'
import { getChatId, fetchMessage, getUserName } from '../../store'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function Chat() {
    const router = useRouter()
    const userId = router.query.id
    const [data, setData] = useState([{}])
    const [userName, setUserName] = useState('')
    const [chatId, setChatId] = useState('')
    
    useEffect(() => {
        async function getChat(userId) {
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

        async function getName(userId) {
            setUserName(await getUserName(userId))
        }

        getChat(userId)
            .then(getMessages())
            .then(getName(userId))

    }, []);

    return (
        <Layout >
            <Messages messageList={data} userName={userName} />
            <Form userId={userId} chatId={chatId} />
        </Layout>
    )
}

export default Chat;