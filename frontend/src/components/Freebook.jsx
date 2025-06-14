import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
export default function Freebook() {
    const [book,setBook]=useState([])
    useEffect(()=>{
      const getBook =async()=>{
        try{
         const res = await axios.get("http://localhost:3000/book")
         const data=res.data.filter((data)=>data.category==="Free")
         setBook(data)
        }
       catch(error){
        console.log(error)
      }
    }
    getBook()
    },[])

      var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
         infinite: true,
          dots: true 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
           infinite: true,
          dots: true 
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <>
    <div className='text-black max-w-screen-2xl container mx-auto md:px-20 px-4 '>
 <div>
     <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, animi. Veniam quasi sed delectus illum reiciendis error incidunt rem eaque.</p>
 </div>
   
    <div>
       <div className="slider-container text-black ">
      <Slider {...settings}>
      {
        book.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
      }
      </Slider>
    </div>
  
    </div>
     </div>
    </>
  )
}
