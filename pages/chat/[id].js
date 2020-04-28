import Layout from '../../components/Layout'
import Messages from '../../components/Messages'
import Form from '../../components/Form'
import { getChatId, fetchMessage, getUserName } from '../../store'

function Chat(props) {
    return (
        <Layout >
            <Messages messageList={props.messageList} />
            <Form userName={props.userName} userId={props.userId} chatId={props.chatId} />
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
            userName: element.user.name
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