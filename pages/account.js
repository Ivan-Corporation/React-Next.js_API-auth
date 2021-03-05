import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import api from '../api'
import { useRouter } from 'next/router'
import useSWR from 'swr'


const fetcher = async (url) => api.get(url)

const Github = ({ data }) => {
    return (
        <div className={styles.github}>
            {!data ?
                <a href={`https://github.com/login/oauth/authorize?client_id=6032b552aea1c954232e`}>Authorize Github</a> :
                <div>
                    <pre>
                        <code>
                            {JSON.stringify(data, null, 4)}
                        </code>
                    </pre>
                </div>
            }
        </div>
    )
}


export default function Account({ query }) {

    const router = useRouter();

    let { code } = router.query

    let [githubData, setGithubData] = React.useState('')

    React.useEffect(() => {

        // Call the Github API route to fetch user data

        if (code) {
            api.get(`/api/github?code=${code}`)
                .then((res) => {
                    setGithubData(res.data)
                })
                .catch((e) => {
                    console.log(e)
                })
                .finally(() => {
                    code = ''
                })
        }
    }, [code, api])


    const { data, error } = useSWR('/api/user', fetcher)

    if (error) {
        router.push('/')
    }

    if (!data) {
        return <div>Loading...</div>
    }





    const logout = () => {
        api.get('/api/logout').then(() => {
            router.push('/')
        })
    }





    return (
        <div className={styles.container}>
            <Head>
                <title>Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <button className={styles.button} style={{ background: 'red', margin: 'none' }} onClick={() => logout()}>&larr; Выйти</button>

            {/* Add logout button */}

            <main className={styles.main}>
                <h1>Страница пользователя</h1>
                <section className={styles.data}>
                    <h2>Информация</h2>
                    <small>Вы вошли в свой аккаунт!</small>

                    {/* Display user information */}
                    <p><b>Имя (запрос с сервера):</b> {data && data.data && data.data.name}</p>
                    <p><b>Почта (запрос с сервера):</b> {data && data.data && data.data.email}</p>

                </section>
                <section className={styles.data}>
                    <h2>Github OAuth</h2>
                    <small>Authorize this application to acces your Github information.</small>

                    {/* Add Github component */}
                    <Github data={githubData} />

                </section>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </div>
    )
}