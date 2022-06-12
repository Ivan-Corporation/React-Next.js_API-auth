import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../api'
import { RepositoryMetrics } from 'repository-metrics'
import { GlitchText } from 'glitch-text'

export default function Home() {

  // logic for form
  const router = useRouter();
  let [username, setUsername] = React.useState('')
  let [password, setPassword] = React.useState('')
  const login = async (e) => {
    e.preventDefault()
    try {
      await api.post('/api/auth', { username, password })
      router.push('/account')
    } catch (e) {
      setPassword('')
      console.log(e)
    }
  }




  return (
    <>
      <div className={styles.container}>

        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <RepositoryMetrics owner='Ivan-Corporation' repo='React-Next.js_API-auth' theme='light' />
          <h1 className={styles.title}>
            <GlitchText theme={'blue'} text={'React API Authorization'} />


          </h1>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Login &rarr;</h3>
              <form>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>

                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className={styles.input}
                    autoComplete='on'
                    type="email"
                    id="email"
                    name="email" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password" />
                </div>
                <button onClick={(e) => login(e)} className={styles.button}>Enter</button>
              </form>
              <p>
                Login to see MOCK (data from local server)
              </p>
            </div>
          </div>
        </main>



      </div>
    </>
  )
}
