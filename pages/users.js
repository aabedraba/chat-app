import Layout from '../components/Layout';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import { getUsers } from '../lib/store'
import { useState, useEffect } from 'react'

function UserLinks(props) {
    return (
        props.users.map(user =>
            <Link href={{ pathname: '/chat', query: { user: user._id } }} key={user._id} prefetch>
                <Button variant="contained">{user.name}</Button>
            </Link>)
    )
}
function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(users => setUsers(users.body))
    }, [])

    return (
        <Layout>
            <div>
                <UserLinks users={users} />
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