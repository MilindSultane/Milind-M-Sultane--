import React from 'react'
import { Divider } from '@mui/material'
import "./cart.css"
import { NavLink } from 'react-router-dom'
const Laptop = () => {
  return (
    <div className="cart_section">
    <div className="cart_container">
    <div className="left_cart">
    <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1657092904/Croma%20Assets/Computers%20Peripherals/Laptop/Images/257161_hcvbl1.png/mxw_1440,f_auto" alt='laptop'/>
    <div className="cart_btn">
    <button className="cart_btn1" >Add to Cart</button>
    <NavLink to="/Blp"><button className="cart_btn2">Buy Now</button></NavLink>
    
    </div>
    </div>
    <div className="right_cart">
    <h3>Laptop </h3>
    <h4>HP 15s-fq2672TU Intel Core i3 11th Generation (15.6 inch, 8GB RAM, 512GB ROM, Windows 11, MS Office Home & Student 2021, Intel UHD Graphics, Natural Silver, 6N045PA#ACJ)</h4> 
    <Divider></Divider>
    <p className='mrp'>₹40,990.00</p>
    {/* <p>Deal Price:<span style={{color:"#b12704"}}>₹66,999.00</span>	</p>
    <p>You Save:	<span style={{color:"#b12704"}}>₹5,000.00 (7%)</span>	</p> */}
    <p className='description'>About this item: <span style={{color:"#565959", fontSize:14, fontWeight:50, textAlign:'justify' }}>
    <br/>Display: 39.62cm (15.6")<br/>
Memory: 8GB DDR4 RAM, 512GB SSD ROM<br/>
Processor: Intel Core i3 11th Generation<br/>
OS: Windows 11 Home<br/>
Graphics: Intel UHD Graphics<br/>
Included Software: MS Office Home & Student 2021<br/>
Warranty : 1 year Onsite<br/>
    </span></p>

    </div>
    </div>
    </div>
  )
}

export default Laptop
