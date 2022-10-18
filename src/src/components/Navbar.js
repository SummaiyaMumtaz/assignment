import React, { useState } from "react"
import { NavLink } from 'react-router-dom'
import CancelIcon from '@mui/icons-material/Cancel';
import MenuIcon from '@mui/icons-material/Menu';
import "./Navbar.css";


export default function Navbar() {
  const [Mobile, setMobile] = useState(false)
  return (
    <div className='navbar'>
      <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcSRvloieXH0vLx1LbWeLCuEiqP6I2TzZzA&usqp=CAU"></img>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
      <NavLink to="/"><li>Home</li></NavLink>
      <NavLink  to="/News"><li>News</li></NavLink >
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
     {Mobile ? <CancelIcon /> : <MenuIcon />}
      </button>
    </div>
  )
}

