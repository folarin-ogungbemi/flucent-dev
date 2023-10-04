import React from 'react'
import { NavLink } from "react-router-dom";

const Nav:React.FC = () => {

  const navLinks:Array<string> = ['home', 'studio', 'services', 'work', 'process', 'contact', 'blog']

  return (
    <nav className='flex space-x-5'>
      {navLinks.map((nav, navIndex)=>
        <NavLink
            to={nav==='home'? '/':`/${nav}`}
            key={navIndex}
            className='capitalize font-medium h-fit underline-nav-link text-skin-link hover:text-skin-link_hover'>
            {nav}
        </NavLink>)}
    </nav>
    )
}

export default Nav;