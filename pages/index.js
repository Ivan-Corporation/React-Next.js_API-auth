import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from 'react'
import { useRouter } from 'next/router'
import api from '../api'

export default api;



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
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          React API Авторизация
        </h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Логин &rarr;</h3>
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
                <label htmlFor="password">Пароль</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  type="password"
                  id="password"
                  name="password" />
              </div>
              <button onClick={(e) => login(e)} className={styles.button}>Войти</button>
            </form>
            <p>
              Зайдите как пользователь через mock server
              </p>
          </div>
        </div>
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
