import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Divider} from "@mui/material";
import {products} from "./productdata";
import "./slide.css"
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }
  };
const Slide = () => {

  return (
    <>
    
     <div className='products_section'>
        <div className='product_deal'>
            <h3>Deal of the Day</h3>
            <button className='view_btn'>View All</button>
        </div>
        <Divider></Divider>
        <Carousel
        responsive={responsive}
        infinite ={true}
        draggable={true}
        swipeable={true}
        showDots={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        >
        {
            products.map((e)=>{
                return(
                    <div className='products_items'>
                        <div className='product_img'>
                        <img src={e.url} alt="productitem"/>
                        </div>
                        <p className='products_name'>{e.title.shortTitle}</p>
                        <p className='products_offer'>{e.discount}</p>
                        <p className='products_explore'>{e.tagline}</p>
                    </div>
                )
            })
        }
        </Carousel>
        

             </div>
    </>
  )
}

export default Slide
