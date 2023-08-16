import React from 'react'
import { Link } from 'react-router-dom'
const CartIcon = () => {
  return (
    <Link to='/Cart' className="flex items-center gap-4">
    <div className=' w-2 h-2 relative  '>
        <img src="/carts.png" alt=""  height={30} width={30}/>
    </div>
    <span>Cart(3)</span>
    </Link>
  )
}

export default CartIcon