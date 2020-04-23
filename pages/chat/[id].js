import Layout from "../../components/Layout";
import fetch from 'node-fetch'


function Chat(props) {
    return (
        <Layout>
            <div>
                {props.data.map(
                    message => <p key={message.user._id}>{message.message}</p>)
                }
            </div>
            <style jsx>{`
                div{
                    text-align: center
                }
            `}</style>
        </Layout>
    )
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
        data: await getMessages(chatId)
    }
}

export default Chat;