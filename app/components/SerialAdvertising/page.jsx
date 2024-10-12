"use client"
import './style.scss'
import icon1 from './img/Union.png'
import icon2 from './img/Vector (1).png'
import icon3 from './img/Vector.png'
import icon4 from './img/Box Icons (8).png'
import Image from 'next/image'




export default function SerialAdvertising() {
 
    return (
      <div className='mainAdvertising'>
        <div className='advertisingBox'>
            <div className='toptext'>
                <div className='bigtext'>Попробуй 7 дней бесплатно</div>
                <div className='smalltext'>далее от 166 ₽/месяц по подписке</div>
            </div>
            <div className='boxIcon'>
                <div className='icon1'>
                    <div className='icon'><Image
            src={icon1}
            alt="logo"
            className="logo"/></div>
                    <div className='text'>Новинки каждую неделю</div>
                </div>
                <div className='icon1'>
                    <div className='icon'><Image
            src={icon2}
            alt="logo"
            className="logo"/></div>
                    <div className='text'>На любом устройстве</div>
                </div>
                <div className='icon1'>
                    <div className='icon'><Image
            src={icon3}
            alt="logo"
            className="logo"/></div>
                    <div className='text'>Без рекламы и доплат</div>
                </div>
                <div className='icon1'>
                    <div className='icon'><Image
            src={icon4}
            alt="logo"
            className="logo"/></div>
                    <div className='text'>Эксклюзивная озвучка</div>
                </div>
            </div>
        </div>
      
      </div>
    );
  }