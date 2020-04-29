import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import useSWR from 'swr'

async function fetcher (url) {
    return fetch(url).then(res => res.json())
}

function Users() {
    const {data, error} = useSWR('http://localhost:3001/user', fetcher)

    if (error) return <div>Error loading</div>

    return (
        <Layout>

            <div>
                {data 
                ? data.body.map(user =>
                    <Link href={{ pathname: '/chat', query: { user: user._id } }} key={user._id}>
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