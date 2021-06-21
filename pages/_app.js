import Head from 'next/head'
import Header from '../components/shared/header'
import '../styles/globals.scss'

const MyApp = props => {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
