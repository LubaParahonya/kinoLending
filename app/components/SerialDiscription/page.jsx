"use client"
import './style.scss'
import Image from 'next/image'
import iconInfo from './img/WarningCircle.png'

export default function SerialDiscription() {
    
  
    
    return (
       <div className='mainAdvertising'>
        <div className='leftPart'>
            <ul className='listMenu'>
                <li className='itemMenu'>Описание</li>
                <li className='itemMenu'>О сериале</li>
                <li className='itemMenu'>Съёмочная группа</li>
            </ul>
            <div className='mainText'>1980-е годы, тихий провинциальный американский городок. Благоприятное течение местной жизни нарушает загадочное исчезновение подростка по имени Уилл. Выяснить обстоятельства дела полны решимости родные мальчика и местный шериф, также события затрагивают лучшего друга Уилла — Майка. Он начинает собственное расследование. Майк уверен, что близок к разгадке, и теперь ему предстоит оказаться в эпицентре ожесточенной битвы потусторонних сил.</div>
            <div className='boximg'>
                <Image src={iconInfo} alt="icon" className='imgInfo'/>
            <div className='infoAdvertising'>Контент может содержать сцены курения и употребления спиртных напитков. Курение и чрезмерное употребление алкоголя вредит здоровью.</div>
            </div>
            <div className='auth'>Сообщить о нарушении авторских прав</div>
        </div>
        <div className='rightPart'>
            <div className='estimation'>
                <div className='border'>9,4</div>
                </div>
            <div className='textrating'>
                <span className='title'>Как тебе сериал?</span>
                <span className='titleSmall'>Оценка улучшит твои рекомендации</span>
                <ul className='listRating'>
                    <li className='itemRating'>1</li>
                    <li className='itemRating'>2</li>
                    <li className='itemRating'>3</li>
                    <li className='itemRating'>4</li>
                    <li className='itemRating'>5</li>
                    <li className='itemRating'>6</li>
                    <li className='itemRating'>7</li>
                    <li className='itemRating'>8</li>
                    <li className='itemRating'>9</li>
                    <li className='itemRating'>10</li>
                </ul>
            </div>
        </div>
       </div>
    );
  }