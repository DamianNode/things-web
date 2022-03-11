import type { NextPage } from 'next'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Thing Web Clone</title>
        <meta name="description" content="Web app version of popular to-do app named Things" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ height: '100vh'}}>
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
