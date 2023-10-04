import React from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import AboutIntro from '../studioComps/About'
import StudioImage from '../studioComps/StudioImage'

const Studio:React.FC = () => {
  return (
    <Layout title='FlucentDev | Studio' content='flucentDev about studio page'>
        <div className='w-full h-[78.95dvh] flex justify-center items-center'>
            <div className='container mx-auto px-4 grid grid-cols-3'>
                <aside className='w-full my-auto'>
                    <StudioImage/>
                </aside>
                <div className='col-span-2 h-[78.95dvh] pt-[1.975px] pr-5 overflow-y-auto'>
                    <AboutIntro/>
                </div>
            </div>
        </div>
        <Footer/>
    </Layout>
  )
}

export default Studio;