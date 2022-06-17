import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import api from '../api'
import { RepositoryMetrics } from 'repository-metrics'
import { GlitchText } from 'glitch-text'
import 'intro.js/introjs.css';

// import { Steps, Hints } from 'intro.js-react';
import dynamic from 'next/dynamic';

const Steps = dynamic(() => import('intro.js-react').then(mod => mod.Steps), {
  ssr: false
});
const Hints = dynamic(() => import('intro.js-react').then(mod => mod.Hints), {
  ssr: false
});

let tutorial = {
  stepsEnabled: false,
  initialStep: 0,
  steps: [
    {
      element: ".hello",
      intro: "Write your login here 🌗",
      position: 'right',
    },
    {
      element: ".world",
      intro: "Then write password 🌖",
      position: 'right'
    },
    {
      element: ".enter",
      intro: "Then just click on button 🌕",
      position: 'right'

    }
  ],
  hintsEnabled: true,
  hints: [
    {
      element: ".hello",
      hint: "Don't forget change your language bar!",
      hintPosition: "middle-right"
    },
    {
      element: ".world",
      hint: "Just some random pass (123 for example)",
      hintPosition: "middle-right"
    }
  ]
};




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

  const [ToggleSteps, setToggleSteps] = useState(tutorial.stepsEnabled)
  const [OnExit, setOnExit] = useState(false)

  function OnExitIntro() {
    setOnExit()
  }



  return (
    <>
      <div className={styles.container}>
        <Steps
          enabled={ToggleSteps}
          steps={tutorial.steps}
          initialStep={tutorial.initialStep}
          onExit={OnExitIntro}
          onComplete={OnExitIntro}
        />
        <Hints enabled={tutorial.hintsEnabled} hints={tutorial.hints} />
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>

          <RepositoryMetrics owner='Ivan-Corporation' repo='React-Next.js_API-auth' theme='light' />
          <h1 className={styles.title}>
            <GlitchText theme={'blue'} text={'React API Authorization'} />


          </h1>
          <button className='tutorial_button' onClick={setToggleSteps}>Tutorial 💬</button>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Login &rarr;</h3>
              <form>
                <div className='hello'>
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
                </div>
                <div className='world'>
                  <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.input}
                      type="password"
                      id="password"
                      name="password" />
                  </div>
                </div>
                <div className='enter'>
                  <button onClick={(e) => login(e)} className={styles.button}>Enter</button>
                </div>
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
