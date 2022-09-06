import React from 'react'
import { NavLink } from 'react-router-dom'


const Right = () => {
  return (
    <div className='right_buy'>
      <div className='cost_right'>
      <p>Your Order is eligible for free delivery</p><br/>
      <span>Select this option at checkout. Detials</span>
<h3>Subtotal (1 items): <span style={{fotnWeight:700}}>₹66,999.00</span></h3>
<NavLink to='/pay'><button className='rightbuy_btn'>Process to buy</button></NavLink>



      </div>
    </div>
  )
}

export default Right
