import { Divider } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import "./cart.css"
const Cart = () => {
  return (
    <div className="cart_section">
    <div className="cart_container">
    <div className="left_cart">
    <img src="https://m.media-amazon.com/images/I/618hqM-yxtL._SX569_.jpg" alt="" />
    <div className="cart_btn">
    <button className="cart_btn1" >Add to Cart</button>
    <NavLink to="/buynow"><button className="cart_btn2">Buy Now</button></NavLink>
    </div>
    </div>
    <div className="right_cart">
    <h3>OnePlus</h3>
    <h4>OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)</h4>
    <Divider></Divider>
    <p className='mrp'>M.R.P.:	₹71,999.00</p>
    <p>Deal Price:<span style={{color:"#b12704"}}>₹66,999.00</span>	</p>
    <p>You Save:	<span style={{color:"#b12704"}}>₹5,000.00 (7%)</span>	</p>
    <p className='description'>About this item: <span style={{color:"#565959", fontSize:14, fontWeight:50, textAlign:'justify' }}>
    <br/> Camera: 48MP Main Camera with Sony IMX 789 Lens (OIS enabled), 50MP Ultra-wide angle camera & 8MP Tele photo lens; Front (Selfie) Camera: 32MP; Flash: Dual LED
<br/>Display: 6.7 Inches; 120 Hz QHD+ Fluid AMOLED with LTPO; Resolution: 3216 x 1440; Aspect Ratio: 20:9
<br/>Operating System: Oxygen OS based on Android 12. Processor: Qualcomm Snapdragon 8 Gen 1
<br/>Battery & Charging: 5000 mAh with 80W SuperVOOC. In-Display Fingerprint Sensor
<br/>Alexa Hands-Free capable: Download the Alexa app to use Alexa hands-free. Play music, make calls, hear news, open apps, navigate, and more, all using just your voice, while on-the-go.
<br/>Connector type: usb type c,Operating System: Oxygenos; Form Factor: Smartphone; Cellular Technology: 5g, 4g Lte
    </span></p>

    </div>
    </div>
    </div>
  )
}

export default Cart
