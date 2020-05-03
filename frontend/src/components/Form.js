import { useState } from 'react'
import { storeMessage } from '../lib/store' 

export default function Form(props) {
    const chatId = props.chatId
    const userId = props.userId

    const [newMessage, setNewMessage] = useState('')
    const [messageCount, setMessageCount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        storeMessage({ message: newMessage, chatId, userId })
        setMessageCount(messageCount + 1)
        setNewMessage('')
    }

    const handleChange = (e) => { setNewMessage(e.target.value) }

    return (
        <div>
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
        </div>
    )
}

