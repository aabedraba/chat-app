import fetch from 'node-fetch';

export default function Index(props) {
    return (
        <div>
            <h1>Hello chat</h1>
            <ul>
                {props.messages.body
                    .map(message => <li key={message.id}>{message.message}</li>)}
            </ul>
            
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('http://localhost:3001/message');
    const messages = await res.json();

    return {
        props: {
            messages
        }
    }
}