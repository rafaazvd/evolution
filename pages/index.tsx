import React from 'react'
import Head from 'next/head'

import Dashboard from './Dashboard';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>
        Evolution
        </title>
      </Head>

      <Dashboard />
    </>
  )
}

export default Home
