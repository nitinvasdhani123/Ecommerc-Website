import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon';
import Menu from './Menu'


function Navbar() {
  const user=false;
  return (
    
    <>
    <div className=' flex font-medium justify-between h-12 p-4 items-center border-b-2 border-b-cyan-600 uppercase'>
      <div className='hidden md:flex gap-4'>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Dashboard">Dashboard</Link>
      
      </div>
      <nav className='text-xl md:text-2xl text-sky-500  font-bold'>
        <Link to='/Home'>Ecommerce</Link>
      </nav>

      <div className='md:hidden'><Menu/></div>
      <div className=' md:flex hidden gap-5 font-medium'>
      {!user?<Link to='/'>Login</Link>:
       <Link to="/Products">Products</Link>}
       <CartIcon/>
      
      </div>
    </div>
    </>
  )
}

export default Navbar