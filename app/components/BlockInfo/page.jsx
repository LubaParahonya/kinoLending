
import './style.scss'
import Image from 'next/image'
import icon1 from './img/Box Icons (1).png'
import icon2 from './img/Box Icons (2).png'
import icon3 from './img/Box Icons (3).png'
import icon4 from './img/Other Icons.png'



export default function BlockInfo({}) {
   

    return (
     <div className='mainBoxNew'>
      <div className='boxNew'>
        <div className='mainText'>Смотри мировые премьеры</div>
        <div className='box'>
          <div className='boxIcon'>
            <div className='boxLeft'>
            <div className='text'> 
            <Image
            src={icon1}
            alt="logo"/>Новинки каждую неделю</div>
            <div className='text'>
            <Image
            src={icon2}
            alt="logo"/>На любом устройстве</div>
            </div>
            <div className='boxRight'>
            <div className='text'>
            <Image
            src={icon3}
            alt="logo"/>Без рекламы и доплат</div>
            <div className='text'>
            <Image
            src={icon4}
            alt="logo"/>Эксклюзивная озвучка </div> 
            </div>   
          </div>
          <div className='buttonInfo'>
            <button className='buttonTryFree'>Попробовать бесплатно</button>
            <div className='price'>Далее от 166 Р/месяц</div>
          </div>
        </div>
      </div>  
     </div>
    );
  }