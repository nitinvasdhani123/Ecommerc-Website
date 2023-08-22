import React from 'react'

const Footer = () => {
  return (
    <div className='h-[5vh] flex items-center justify-around flex-wrap p-4'>
     <p className='text-2xl text-teal-500 font-bold'>Ecommerce</p>
     <ul className='flex flex-wrap gap-8 text-xl'>
      <li>About</li>
      <li>Privacy Policy</li>
      <li>Contact-us</li>
     </ul>
    </div>
  )
}

export default Footer