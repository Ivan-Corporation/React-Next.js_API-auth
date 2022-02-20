import '../styles/globals.css'
import { GradientBackground } from 'gradient-background';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GradientBackground color='blue' />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
