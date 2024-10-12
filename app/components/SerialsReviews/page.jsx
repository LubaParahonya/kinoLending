"use client"
import './style.scss'
import Image from 'next/image'
import Slider from "react-slick";
import imgNext from './img/Box Icons (9).png'




export default function SerialsReviews({dataReview}) {
    
  
    
    return (
       <div className='mainReviews'>
        <div className='boxTitle'>
            <div className='reviewText'>Отзывы</div>
            <div><Image src={imgNext} alt="icon" className='imgReview'/></div>
        </div>
        <div className='boxList'>
            {dataReview.map(el => (
                <div className='boxItem'>
                    <div className='nameItem'>{el.name}</div>
                    <div className='dateItem'>{el.data}</div>
                    <div className='estimationItem'>{el.estimation}</div>
                    <div className='reviewItem'>{el.review}</div>
                    <div className='readMore'>Читать дальше</div>
                </div>
            ))}
        </div>
       </div>
    );
  }