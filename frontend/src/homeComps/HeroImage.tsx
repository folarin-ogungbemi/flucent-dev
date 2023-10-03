import React from 'react'
// https://undraw.co/illustrations
import image from '../assets/Images/programming.svg'

const HeroImage:React.FC = () => {
  return (
    <div className='py-5'>
        <div className=''>
            <img src={image} alt="developer's image" className='w-[80%] h-[70%] mx-auto'/>
        </div>
    </div>
  )
}

export default HeroImage;