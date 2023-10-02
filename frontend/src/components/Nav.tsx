import React from 'react'
import { NavLink } from "react-router-dom";

const Nav:React.FC = () => {

  const navLinks:Array<string> = ['studio', 'services', 'work', 'experience', 'contact', 'blog']

  return (
    <nav className='flex space-x-5'>
      {navLinks.map((nav, navIndex)=>
        <NavLink
            to={`/${nav}`}
            key={navIndex}
            className='capitalize'>
            {nav}
        </NavLink>)}
    </nav>
    )
}

export default Nav;