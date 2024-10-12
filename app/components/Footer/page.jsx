import './style.scss'
import icon1 from './img/Box Icons (4).png'
import icon2 from './img/Box Icons (5).png'
import icon3 from './img/Box Icons (6).png'
import icon4 from './img/Box Icons (7).png'
import icon5 from './img/Logo (1).png'
import Image from 'next/image'
import Link from 'next/link'



export default function Footer() {
    const year = new Date().getFullYear()
    
    return (
     <div className='mainBoxFooter'>
        <div className='topBox'>
            <button className='buttonHelp'>Написать в поддержку</button>
            <div className='boxImgContact'>
                <div className='contact'><h2>Telegram</h2><Image
                              src={icon1}
                              alt="logo"
                              className="imglogo"/></div>
                <div className='contact'><h2>Вконтакте</h2> <Image
                              src={icon2}
                              alt="logo"
                              className="imglogo"/></div>
                <div className='contact'><h2>Youtube</h2> <Image
                              src={icon3}
                              alt="logo"
                              className="imglogo"/></div>
                <div className='contact'><h2>TikTok</h2> <Image
                              src={icon4}
                              alt="logo"
                              className="imglogo"/></div>
            </div>
        </div>
        <div className='mainListContacts'>
          <div className='listContacts'>
            <Link href='/' className='textContacts'>Главная</Link>
            <Link href='/films' className='textContacts'>Фильмы</Link>
            <Link href='/serials' className='textContacts'>Сериалы</Link>
            <Link href='/tv' className='textContacts'>ТВ</Link>
            <Link href='/contacts' className='textContacts'>Контакты</Link>
          </div>
          <div className='listTextContacts'>
            <Link href='/*' className='textContacts'>Реферальная программа</Link>
            <Link href='/*' className='textContacts'>Скачать приложение</Link>
            <Link href='/*' className='textContacts'>Вопросы и ответы</Link>
            <Link href='/*' className='textContacts'>Условия использования</Link>
          </div>
        </div>
        <div className='bottomBox'>
            <div className='old'>18+</div>
            <div className='boxYear'>
                <p>{year}, ООО "ТВОЁ ЛАЙВ"</p>
                <p>Все врава защищены</p>
            </div>
            <div><Image
                              src={icon5}
                              alt="logo"
                              className="iconImg"/></div>
        </div>
     </div>
    );
  }