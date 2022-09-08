import '../assets/tailwind.css'
import Head from '../node_modules/next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Toby Bostoen</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

MyApp.displayName="Portfolio Toby"

export default MyApp
