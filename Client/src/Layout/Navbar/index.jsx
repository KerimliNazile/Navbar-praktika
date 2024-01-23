import React, { useState } from 'react'
import { BsBasketFill } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom'
import './index.scss'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav>
        <div className="Logo">
          <img src="https://preview.colorlib.com/theme/timezone/assets/img/logo/logo.png" alt="" />
        </div>
        <div className="Main">
          <ul id='navin'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li><NavLink to={"/add"}>Add Page</NavLink></li>
            <li><NavLink to={"/basket"}><BsBasketFill /></NavLink></li>
          </ul>
        </div>
        <div className="mobile" onClick={handleClick}>
          {
            isOpen ? <IoClose className='icon' /> : <GiHamburgerMenu className='icon' />
          }
        </div>
      </nav>
      <div className={`${isOpen ? 'navlist_active' : 'navlist_close'} navlist`}>
        <ul>
          <li><NavLink to={"/home"}>Home</NavLink></li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li><NavLink to={"/add"}>Add Page</NavLink></li>
          <li><NavLink to={"/basket"}><BsBasketFill /></NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar