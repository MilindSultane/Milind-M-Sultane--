import React from 'react'
import { Divider } from '@mui/material'
import "./cart.css"
const Tablet = () => {
  return (
    <div className="cart_section">
    <div className="cart_container">
    <div className="left_cart">
    <img src="https://www.91-img.com/pictures/140500-v3-lenovo-tab-p11-tablet-large-1.jpg?tr=q-80" alt="tablet" />
    <div className="cart_btn">
    <button className="cart_btn1" >Add to Cart</button>
    <button className="cart_btn2">Buy Now</button>
    </div>
    </div>
    <div className="right_cart">
    <h3>Lenovo Tab P11</h3>
    {/* <h4>OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)</h4> */}
    <Divider></Divider>
    <p className='mrp'>M.R.P.:	₹21,499.00</p>
    {/* <p>Deal Price:<span style={{color:"#b12704"}}>₹66,999.00</span>	</p>
    <p>You Save:	<span style={{color:"#b12704"}}>₹5,000.00 (7%)</span>	</p> */}
    <p className='description'>About this item: <span style={{color:"#565959", fontSize:14, fontWeight:50, textAlign:'justify' }}>
    <br/>Qualcomm Snapdragon <br/>662 chipset4GB RAM7,<br/>700mAh battery with 20W Fast Charging<br/>Impressive single cameras on both sides<br/>64GB internal storage<br/>4G enabled voice calling facility<br/>Dolby Atmos speakers
    </span></p>

    </div>
    </div>
    </div>
  )
}

export default Tablet
