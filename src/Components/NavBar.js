import React from 'react'
import { NavLink } from 'react-router-dom'

const obj = {
  textDecoration: "none",
  padding: "0 12px",
  fontSize: "20px",
  textAlign: "center",
  fontWeight: "700",
  color:"black"
}
function NavBar() {
  return (
    <div className='d-flex justify-content-center bg-primary text-dark mb-5'>
      <NavLink to='/' style={obj}>Home</NavLink>
      <NavLink to='/render' style={obj}>ConditionalRender</NavLink>
      <NavLink to='/list' style={obj}>ListRender</NavLink>
      <NavLink to='/home' style={obj}>Home</NavLink>
    </div>
  )
}

export default NavBar
