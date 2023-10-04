import React from 'react'
import Image from '../assets/Images/developer.jpg'

const StudioImage:React.FC = () => {
  return (
    <img src={Image} alt='studio Image' className='xl:max-w-[95%] 2xl:w-[85%] xl:h-[75dvh] rounded-xl'/>
  )
}

export default StudioImage;