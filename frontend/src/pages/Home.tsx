import React from 'react'
import Hero from '../homeComps/hero';
import Layout from '../components/Layout'

const Home:React.FC = () => {
  return (
    <Layout title='FlucentDev | Home' content='FlucentDev Homepage'>
      <Hero/>
    </Layout>
  )
}

export default Home;