
import { useEffect, useState } from 'react';
import './style.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Top({dataTop}) {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
      

    return (
     <div className='mainBoxTop'>
        <div className='textTop'>топ-10 недели</div>
        <Slider {... settings}>
            {dataTop.map(el =>(
                <div className='boxTop'>
                    <div className='number'>{el.number}</div>
                    <img src={el.url}
                      alt="logo"
                      className='imgTop'></img>
                </div>
            ))}
        </Slider>
     </div>
    );
  }