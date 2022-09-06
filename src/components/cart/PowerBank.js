import React from 'react'
import { Divider } from '@mui/material'
const PowerBank = () => {
  return (
    <div className="cart_section">
    <div className="cart_container">
    <div className="left_cart">
    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605262727/Croma%20Assets/Communication/PowerBank/Images/8797817733150.png/mxw_1440,f_auto" alt="tablet" />
    <div className="cart_btn">
    <button className="cart_btn1" >Add to Cart</button>
    <button className="cart_btn2">Buy Now</button>
    </div>
    </div>
    <div className="right_cart">
    <h3>Power Bank </h3>
    <h4>Sony 3000 mAh Power Bank (CP-E3, White)</h4> 
    <Divider></Divider>
    <p className='mrp'>₹1,420.00</p>
    {/* <p>Deal Price:<span style={{color:"#b12704"}}>₹66,999.00</span>	</p>
    <p>You Save:	<span style={{color:"#b12704"}}>₹5,000.00 (7%)</span>	</p> */}
    <p className='description'>About this item: <span style={{color:"#565959", fontSize:14, fontWeight:50, textAlign:'justify' }}>
    <br/>3000mAh Capacity Lithium-Polymer Battery <br/>
1.5A Output for Fast Charge <br/>
Overcharge and Short Circuit Protection <br/>
Compatible with USB Devices <br/>
Hybrid Gel Technology <br/>
    </span></p>

    </div>
    </div>
    </div>
  )
}

export default PowerBank
