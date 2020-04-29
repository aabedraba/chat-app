import Layout from '../components/Layout'
import Link from 'next/link'

export default function Index() {
    return (
        <Layout>
            <div>
                <Link href="/users" prefetch>
                    <a>Go to users page</a>
                </Link>
            </div>
            <style jsx>{`
                div {
                    text-align: center
                }
                a {
                    font-size: 30px;
                    text-decoration: none
                }
            `}</style>
        </Layout>
    )
}