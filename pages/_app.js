import { GradientBackground } from 'gradient-background'
import '../styles/globals.css'
import '../styles/tutorial_button.css'
import 'intro.js/introjs.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GradientBackground color='blue' />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
