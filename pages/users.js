import fetch from 'node-fetch';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

function Users(props) {
    return (
        <Layout>
            <div>
                {props.data.body.map(user =>
                    <Link href="chat/[id]" as={`/chat/${user._id}`} key={user._id}>
                        <Button variant="contained">{user.name}</Button>
                    </Link>
                )}
            </div>
            <style jsx>{`
                div {
                    text-align: center
                }
            `}</style>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/user');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

export default Users;