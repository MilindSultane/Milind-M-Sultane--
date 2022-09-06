import React from 'react'
import { NavLink } from 'react-router-dom';
import "./newnav.css";


const Newnav = () => {
    return (
        <div className="new_nav">
            <div className="nav_data">
                <div className="left_data">
                    <NavLink to="/"><p><i className="fas fa-shopping-cart"></i> All</p></NavLink>
                    <NavLink to="/getproductsone/:id"><p>Mobiles</p></NavLink>
                    <NavLink to="/lp"><p>Laptop</p></NavLink>
                    <NavLink to="/tab"><p>Tablets</p></NavLink>
                    <NavLink to="/hp"><p>HeadPhones</p></NavLink>
                    <NavLink to="/pb"><p>Power Banks</p></NavLink>
                </div>
                
            </div>
        </div>
    )
}

export default Newnav
