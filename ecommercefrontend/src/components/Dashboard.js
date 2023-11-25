
import React,{useState} from 'react'


import { Link } from 'react-router-dom'
import ProfileInfo from './ProfileInfo'

function Dashboard() {
  


  return (
  <div className="w-[95vw] h-[76vh] mx-4 mt-5 my-5 flex align-center gap-2">
    <div className='w-1/4 border-2  '>
      <h2 className='mx-2 mt-3 md:p-6 px-2  text-[12px] font-bold text-center  md:text-[20px]'>Pranjal Kulshrestha</h2>
      <div className='h-[60vh] mt-4 px-2 py-2 flex flex-col items-center border-2 outline-none border-teal-800'>
        <Link className='flex flex-1 items-center justify-center gap-2 w-full outline-none  ' to="/Products">
       <button className=' bg-transparent text-[12px] md:font-bold md:text-2xl'>MY ORDERS</button> 
       <span className='md:text-2xl'>＞</span>
       </Link>
       <div className=' mt-2 w-full flex-1 flex flex-col items-center justify-around border-2 border-b-emerald-600 border-t-emerald-600'>
        <h2 className='text-[10px] mt-2 md:text-2xl'>Accounts Settings</h2>
        <ul className='text-[8px] md:text-[18px] mt-2 flex flex-col items-center justify-center p-2 gap-2'>
          <Link to='/ProfileInfo'><li>Profile Info</li></Link>
          <button><li>Manage Address</li></button>
        </ul>
       </div>
       <div className=' mt-2 w-full flex flex-1 flex-col  items-center justify-around border-2 border-b-emerald-600 border-t-emerald-600'>
        <h2 className='text-[10px] mt-2 md:text-2xl'>Payments</h2>
        <ul className='text-[8px] md:text-[16px] mt-2 flex flex-col items-center justify-center p-2 gap-2'>
          <li>Gift Cards</li>
          <li>Saved UPI</li>
          <li>Saved Cards</li>
        </ul>
       </div>
       <button className='text-[10px] md:text-2xl bg-emerald-500 p-4 mt-2 '>LOGOUT</button>
      </div>
    </div>
    <div className=' w-3/4 border-2 mx-2 border-teal-800 overflow-y-auto'><ProfileInfo/></div>  
  </div>
  )
}

export default Dashboard