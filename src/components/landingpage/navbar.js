import React from 'react'
import './landingpage.css'

function Navbar() {
  return (
    <div id='navbar'>
      <div className='logo'>
        <a href="/" className='navlink'>Beans 'n Cream Cafe </a>
      </div>

      <div className='links'>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/BookYourTable">Book a table</a></li>
          <li><a href="/Product">Product</a></li>
          <li><a href="/Yourorder">Your Order</a></li>
        </ul>
      </div>

      <div className='btn'>
        <button className='signinbtn'>Sign In</button>
        <button className='signupbtn'>Sign Up</button>
      </div>

    </div>
  )

}

export default Navbar