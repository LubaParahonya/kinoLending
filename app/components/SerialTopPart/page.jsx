
import './style.scss'
import imageFilm from '../TrailerSection/img/2def2458d55cceb1fd740482353bbd7c.png'
import Image from 'next/image'
import like from './img/Master Button (1).png'
import repost from './img/Master Button.png'
import sound from './img/Button Desktop (1).png'
import extention from './img/Button Desktop.png'
 
export default function SerialTopPart() {
     
    return (
        <div  className="mainPart">
            <div className='boxImg'>
            <Image
            src={imageFilm}
            alt="logo"
            className="image"/>
            </div>
            <div className='infoKino'>
                <li className='listItem'><span className='textItem'>7.9</span></li>
                <li className='listItem'><span className='textItem'>Премьера</span></li>
                <li className='listItem'><span className='textItem'>2024</span></li>
                <li className='listItem'><span className='textItem'>Фентези</span></li>
                <li className='listItem'><span className='textItem'>США</span></li>
                <li className='listItem'><span className='textItem'>16+</span></li>
            </div>
            <div className='nameKino'>Сериал Аватар: легенда об Аанге смотреть онлайн</div>
            <div className='aboutKino'>Чтобы спасти мир от разрушительной войны, мальчик по имени Аанг должен справиться с четырьмя стихиями и вступить в схватку с безжалостным противником, который пытается его остановить.</div>
            <div className='groupButton'>
                <button className='free'>Смотреть бесплатно</button>
                <div className='box'>
                <div className='left'>
                <button><Image
            src={like}
            alt="logo"
            className="buttonLike"/></button>
                <button><Image
            src={repost}
            alt="logo"
            className="buttonLike"/></button>
                </div>
                <div className='right'>
                <button><Image
            src={sound}
            alt="logo"
            className="buttonLike"/></button>
            <button><Image
            src={extention}
            alt="logo"
            className="buttonLike"/></button>
                </div>
                </div>
            </div>
        </div>

    );
  }