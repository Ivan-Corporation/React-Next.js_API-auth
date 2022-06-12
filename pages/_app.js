import { GradientBackground } from 'gradient-background'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GradientBackground color='blue' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
