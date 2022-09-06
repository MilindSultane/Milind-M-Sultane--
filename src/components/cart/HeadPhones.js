import React from 'react'
import { Divider } from '@mui/material'

const HeadPhones = () => {
  return (
    <div className="cart_section">
    <div className="cart_container">
    <div className="left_cart">
    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605171824/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8944869048350.png/mxw_1440,f_auto" alt="tablet" />
    <div className="cart_btn">
    <button className="cart_btn1" >Add to Cart</button>
    <button className="cart_btn2">Buy Now</button>
    </div>
    </div>
    <div className="right_cart">
    <h3>Wireless Headphone</h3>
    <h4>Sony WH-CH510 On-Ear Wireless Headphone with Mic (Up to 35 Hours Battery, Blue)</h4> 
    <Divider></Divider>
    <p className='mrp'>₹2,790.00</p>
    {/* <p>Deal Price:<span style={{color:"#b12704"}}>₹66,999.00</span>	</p>
    <p>You Save:	<span style={{color:"#b12704"}}>₹5,000.00 (7%)</span>	</p> */}
    <p className='description'>Key Features: <span style={{color:"#565959", fontSize:14, fontWeight:50, textAlign:'justify' }}>
    <br/>On-Ear<br/>
Ideal For: Entertainment | Travel<br/>
Up to 35 hours Battery<br/>
Bluetooth 5.0
    </span></p>

    </div>
    </div>
    </div>
  )
  
}

export default HeadPhones
