function Messages(props) {
    return (
        <div> 
            {props.messageList.map(message => <p key={message.id}>{message.message}</p>)}
            <style jsx>{`
                p {
                    text-align: center
                }
            `}</style>
        </div>
    );
}

export default Messages;