import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  const isActiveStyle = {
    textDecoration: 'none',
    color: 'red'
  };

  return (
   <>
   <div className='nav-bar'>
    <ul>
      <li>
      <NavLink style={({ isActive }) => isActive ? isActiveStyle : {}} to="/">Home</NavLink> 
      </li>
      <li>
      <NavLink style={({ isActive }) => isActive ? isActiveStyle : {}} to="/countries">Countries</NavLink> 
      </li>
    </ul>
   </div>
   </>
  )
}
export default Navbar