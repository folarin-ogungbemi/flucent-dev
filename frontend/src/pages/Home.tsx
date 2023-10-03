import React from 'react'
import Hero from '../homeComps/HeroContent';
import Image from '../homeComps/HeroImage'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

const Home:React.FC = () => {
  return (
    <Layout title='FlucentDev | Home' content='FlucentDev Homepage'>
      <div className='w-full h-[78.95dvh] bg-skin-complement_bg flex justify-center items-center'>
        <div className='container mx-auto px-4 grid grid-cols-2 my-auto'>
          <Hero/>
          <Image/>
        </div>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home;