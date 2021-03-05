import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Account({ query }) {

    React.useEffect(() => {

        // Call the Github API route to fetch user data

    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Add logout button */}

            <main className={styles.main}>
                <h1>Authenticated Account Page</h1>
                <section className={styles.data}>
                    <h2>Basic User Information</h2>
                    <small>Since we know it's you.. here's your information!</small>

                    {/* Display user information */}

                </section>
                <section className={styles.data}>
                    <h2>Github OAuth</h2>
                    <small>Authorize this application to acces your Github information.</small>

                    {/* Add Github component */}

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