import React from 'react'
import { useState } from 'react'


import './Profile.css'
function ProfileInfo() {
  const [edit, setedit] = useState(false);
  const Changedit = () => {
    setedit(!edit);

  }



  return (
    <div>
      <header>
        <div className='main flex gap-10 text-2xl'>
          <span className='font-bold'>Profile Information</span>
          <span><button onClick={Changedit}>edit</button></span>
        </div>
        <form>
          <div className='inputs'>
            <input disabled={edit} type="text" placeholder='Firstname' />
            <input type="text" disabled={edit} placeholder='Lastname' />
          </div>
          <div className='gender flex flex-col mt-4'>
            <h1 className='text-2xl font-semibold'>Gender</h1>
            <label class="label">
              <input value="value-2" name="value-radio" id="value-2" class="radio-input" checked type="radio" />
              <div class="radio-design"></div>
              <div class="label-text">Male</div>
            </label>
            <label class="label">
              <input value="value-3" name="value-radio" id="value-3" class="radio-input" type="radio" />
              <div class="radio-design"></div>
              <div class="label-text">Female</div>
            </label>
          </div>
        </form>
        <div className='main flex gap-10 text-2xl mt-5'>
          <span>Email Address</span>
          <span><button onClick={Changedit}>edit</button></span>
        </div>
        <input type="email" disabled={edit} className="mt-3" placeholder='example@gamil.com ' />
        <div className='main flex gap-10 text-2xl mt-5'>
          <span>Mobile Number</span>
          <span><button onClick={Changedit}>edit</button></span>
        </div>
        <input type="text" disabled={edit} className="mt-3" placeholder='9045xxxx' />


        <div className=' faq'>
        <div className='text-2xl mt-2 font-semibold'>FAQs</div>
        <div><h4>What happens when I update my email address (or mobile number)?</h4>
          <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
          <h4>When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
          <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
          <h4>What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
          <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
          <h4>Does my Seller account get affected when I update my email address?</h4>
          <p>Ecommerce has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
        </div></div>

      </header>
    </div>


  )
}

export default ProfileInfo