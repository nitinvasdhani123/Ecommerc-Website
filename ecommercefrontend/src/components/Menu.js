import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
const Menu = () => {
  const links=[
    {id:1,title:"HOME",url:"/Home"},
    {id:2,title:"ABOUT",url:"/About"},
    {id:3,title:"DASHBOARD",url:"/Dashboard"},

]
const [open,Setopen]=useState(false);
const user=false;
return (
<div className='cursor-pointer'>
  {!open?(<img src='/open.png' alt='' width={20} height={20} onClick={()=>Setopen(true)}/>):
  (<img src='/close.png' alt='' width={20} height={20} onClick={()=>Setopen(false)}/>)}
   {
   open && (<div className='bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-center gap-8 z-10'>
    {links.map(item=>(
        <Link to={item.url} key={item.id} onClick={()=>Setopen(false)}>{item.title} </Link>
    ))}
    {!user?<Link to='/Login' onClick={()=>Setopen(false)}>Login</Link>:<Link to='/Products' onClick={()=>Setopen(false)}>Orders</Link>}
    <Link to='/Cart'onClick={()=>Setopen(false)}><CartIcon/></Link>
    
  </div>)
  }
</div>
)
}

export default Menu
