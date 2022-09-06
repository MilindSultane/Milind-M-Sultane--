import { Divider } from '@mui/material';
import React from 'react'
import Option from './Option';
import Right from './Right';
import "./buynow.css";
const Buynow = () => {
  return (
    <div className='buynow_section'>
      <div className="buynow_container">
      <div className="left_buy">
      <h1>Shopping Cart</h1>
      <p>Select all items</p>
      <span className='leftbuyprice'>Price</span>
      <Divider></Divider>
      <div className="item_containert">
      <img src='https://m.media-amazon.com/images/I/618hqM-yxtL._SX569_.jpg' alt='mobile'></img>
      <div className="item_details">
        <h3>OnePlus 10 Pro 5G (12GB RAM, 256GB Storage)</h3>
        <h3 className="diffrentprice">₹66,999.00</h3>
        <p className='unusuall'>Usually dispatched in 8 days.</p>
        <p>Eligible for FREE Shipping</p>
        <Option></Option>
      </div>
      <h3 className='item_price'>₹66,999.00</h3>

      </div>
      </div>
     <Right/>

      </div>
    </div>
  )
}

export default Buynow
