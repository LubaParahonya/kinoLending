import { useEffect, useState } from 'react';
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



export default function BlocNews({dataNews}) {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };

    return (
      <div className='mainBoxNews'>
       <p className='newtext'>Новинки</p>
     <Slider  {... settings}> 
        {dataNews.map(el =>(
            <div className='boximage'>
                <img src={el.url}
                 alt="logo"
                 className="new"></img>
                 <div className='rating'>{el.rating}</div>
                 <div className='blocText'>
                   {el.name}      
                 </div>
                 <div className='box'>
                    <h2 className='text'>{el.year}</h2>
                    <h2 className='text'>{el.time}</h2>  
                 </div>  
            </div>
        ))}
     </Slider>
      </div>
     
    );
  }