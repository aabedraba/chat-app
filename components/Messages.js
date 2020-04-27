import useSWR from 'swr'
import { fetchMessage } from '../utils'

function Messages(props) {
    const { data, error } = useSWR(`https://next-chat-app-aabedraba.herokuapp.com/chat/${props.userId}`, fetchMessage);
    
    if (error) return 'Error loading...'
    if (!data) return 'Loading...'
    return (
        <div> 
            {data?.body.map(message => <p key={message._id}>{message.message}</p>)}
            <style jsx>{`
                p {
                    text-align: center
                }
            `}</style>
        </div>
    );
}

export default Messages;