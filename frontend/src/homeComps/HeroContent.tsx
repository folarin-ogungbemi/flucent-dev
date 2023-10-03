import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero:React.FC = () => {
  return (
   <div className='flex py-5'>
        <div className='flex flex-col space-y-5'>
            <h1 className='text-5xl font-bold mb-5 text-start w-[90%]'>Mastercraft in Building Frontend & Backend Aplications.</h1>
            <p className='text-md text-start w-[80%]'>Leveraging technology with aesthetic design & software architecture that exhibits an amazing digital experience.</p>
            <div className='flex space-x-5'>
                <button className='rounded-full py-4 px-5 border bg-skin-button_bg_sec text-skin-pry_text hover:drop-shadow-lg'>Contact Us</button>
                <button className='rounded-full py-4 px-5 border flex hover:drop-shadow-lg'>Projects <AiOutlineArrowRight className='ml-2 my-auto'/></button>
            </div>
        </div>
  </div>
  )
}

export default Hero;