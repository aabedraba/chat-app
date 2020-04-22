import Layout from '../components/Layout'
import fetch from 'node-fetch'

export default function Index(props) {
    return (
        <Layout>
            <h1>Hello chat</h1>
            <ul>
                {props.messages.body
                    .map(message => <li key={message.id}>{message.message}</li>)}
            </ul>
        </Layout>
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