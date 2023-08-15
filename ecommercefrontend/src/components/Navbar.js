import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
      <li className='text-6xl'><Link to="/Home">Home</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
      </ul>
    </div>
  )
}

export default Navbar