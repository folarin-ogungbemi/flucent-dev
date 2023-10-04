import React from 'react'
import {Link} from 'react-router-dom'

const Footer:React.FC = () => {
  return (
    <div className='w-full border-t-2 border-skin-section_divide z-40'>
        <div className='container mx-auto p-4 flex justify-between text-sm'>
            <Link to='' className='hover:underline font-semibold text-skin-link hover:text-skin-link_hover'>Site map</Link>
            <Link to='' className='font-semibold'>&copy;2023 <span className='text-skin-link hover:text-skin-link_hover hover:underline'>FlucentDev.com</span> | All Rights reserved.</Link>
        </div>
    </div>
  )
}

export default Footer;