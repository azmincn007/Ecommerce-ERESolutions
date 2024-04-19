import React from 'react'
import './Nav.css'
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import logo from '../images/logo.png'
function Nav() {
  return (
    <div className='navbar'>
        <div className="top">
        <div className="search"><IoSearch  className='search'/></div>
        <div className="logo"><img src={logo} alt="" /></div>
        <div className="nav-credentials">
            <div className="account"><FaUser /> Account</div>
            <div className="cart"><FaShoppingBag/> Shopping</div>
        </div>
        </div>

        <div className="down">
         categories
        </div>
      
    </div>
  )
}

export default Nav
