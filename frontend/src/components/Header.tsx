import React from 'react'
import {Link} from 'react-router-dom'
import NavLinks from './Nav'

const Header:React.FC = () => {

  return (
    <>
      <header className='w-full h-fit p-4 bg-skin-pry_bg text-skin-sec_text border-b-2 border-skin-section_divide z-40'>
          <nav className="flex justify-between container mx-auto">
              <Link to='/' className='text-2xl font-bold'>FlucentDev</Link>
              <NavLinks />
          </nav>
      </header>
    </>
  )
}

export default Header;