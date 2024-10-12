"use client"
import './style.scss'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




export default function SerialsList({dataFilms}) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
  
    
    return (
       <div className='mainSerialsList'>
        <div className='list'>
            <div className='menu'>Трейлер</div>
            <div className='menu'>1 сезон</div>
            <div className='menu'>2 сезон</div>
            <div className='menu'>3 сезон</div>
        </div>
        <Slider  {... settings}>
            {dataFilms.map(el => (
                <div className='itemSerial'>
                    <img src={el.url}
                    alt="logo"
                    className="imgCard"></img>
                    <div className='name'>{el.name}</div>
                    <div className='time'>{el.time}</div>
                    </div>
            ))}
            </Slider>
 
        
       </div>
    );
  }