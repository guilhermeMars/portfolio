import '../styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Guilherme Mars</title>
      <meta
        name="description"
        content="Desenvolvedor web Front-end especializado em React/Next.js!"
      />
      <meta name="author" content="Guilherme Martins" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
