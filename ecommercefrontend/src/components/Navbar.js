import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon';
import Menu from './Menu'


function Navbar() {
  const user=false;
  return (
    
    
    <div className=' flex font-medium justify-between h-[10vh] p-4 items-center border-b-2 border-b-cyan-600 uppercase'>
     
      <nav className='text-xl md:text-2xl text-sky-500  font-bold'>
        <Link to='/'>Ecommerce</Link>
      </nav>
      <div className='hidden md:flex gap-10 md:text-2xl'>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Dashboard">Dashboard</Link>
      
      </div>

      <div className='md:hidden'><Menu/></div>
      <div className=' md:flex hidden gap-5 font-medium'>
      {!user?<Link to='/Login'>Login</Link>:
       <Link to="/Products">Products</Link>}
       <CartIcon/>
      
      </div>
    </div>
    
  )
}

export default Navbar