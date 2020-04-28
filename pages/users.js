import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import useSWR from 'swr'

async function fetcher (url) {
    return fetch(url).then(res => res.json())
}

function Users() {
    const {data, error} = useSWR('https://nodejs-chat-backend.herokuapp.com/user', fetcher)

    if (error) return <div>Error loading</div>

    return (
        <Layout>

            <div>
                {data 
                ? data.body.map(user =>
                    <Link href="chat/[id]" as={`/chat/${user._id}`} key={user._id}>
                        <Button variant="contained">{user.name}</Button>
                    </Link>)
                : 'Loading...'
                }
            </div>
            <style jsx>{`
                div {
                    text-align: center
                }
            `}</style>
        </Layout>
    )
}

export default Users;