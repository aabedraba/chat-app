import fetch from 'node-fetch';
import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';

function Users(props) {
    return (
        <Layout>
            {props.data.body.map(user =>
                <Button key={user.id} variant="contained">{user.name}</Button>
            )}
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