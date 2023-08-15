import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'


function Navbar() {
  const user=false;
  return (
    
    <>
    <div className=' flex font-medium justify-between h-12 p-4 items-center border-b-2 border-b-red-500 uppercase'>
      <div className='hidden md:flex gap-4'>
        <Link to="/Home">Home</Link>
       
        <Link to="/About">About</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Cart">Cart</Link>
      </div>
      <nav className='text-xl text-red-500 font-bold'>
        <Link href='/'>Ecommerce</Link>
      </nav>

      <div className='md:hidden'><Menu/></div>
      <div className=' md:flex hidden gap-5'>
      {!user?<Link href='/'>Login</Link>:
       <Link to="/Products">Products</Link>}
      
      </div>
    </div>
    </>
  )
}

export default Navbar