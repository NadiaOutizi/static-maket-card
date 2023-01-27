import React from 'react'
import './Css/Header.css'

function Section() {
  return (
   
      <section className='section'>
        <div className='logo'>
                <img src="./images/logo.png" alt="logo du site"  />
            </div>   
      <ul className="header_nav">
                    <li className="first_link" >Overview</li>
                    <li>Account</li>
                    <li>Service</li>
                    <li>Payment</li>
                </ul>
                <p className='logout'>Logout</p>
      </section>

        
  
  )
}

export default Section