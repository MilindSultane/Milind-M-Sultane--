import React from 'react'
import "./navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from 'react-router-dom';
const Navbaar = () => {
  return (
    <header>
        <nav>
            <div className='left'>
            <div className='navlogo'>
            <NavLink to="/"><img src='./download-removebg-preview.png' alt=''></img></NavLink>
            </div>
            <div className='nav_searchbaar'></div>
<input type='text' name='' id='' placeholder='Search your product here....'></input>
<div className='search_icon'>
<SearchIcon id='search'></SearchIcon>
</div>
            </div>
            <div className='right'>
<div className='nav_btn'>
    < NavLink to="/login">Sign in</NavLink>
</div>
<div className='cart_btn'>
<Badge badgeContent={4} color="primary">
      <ShoppingCartIcon id='icon'></ShoppingCartIcon>
    </Badge>
    <p>Cart</p>
</div>
<Avatar className='avtar'></Avatar>
            </div>
        </nav>
    </header>
  )
}

export default Navbaar
