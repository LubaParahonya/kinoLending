"use client"
import './style.scss'
import Image from 'next/image'
import Link from 'next/link'
import imglogo from './img/Type=Logo.png'
import imgInstall from './img/download-04-stroke-rounded.svg'
import imgDiscont from './img/Icons.png'
import imgsearch from './img/Box Icons.png'
import { useState } from 'react'



export default function Navigation() {
    const [isActiveMain, setisActiveMain] = useState(true)
    const [isActiveFilms, setisActiveFilms] = useState(false)
    const [isaActiveSerial, setisaActiveSerial] = useState(false)
    const [isaActiveTV, setisaActiveTV] = useState(false)

    const ChangeClass = (isActive, setActive ) => {
        setActive(!isActive)
    }
    
    
    return (
        <nav className="mainnav">
        <nav className="headerNav">
         <Image
      src={imglogo}
      alt="logo"
      className="imageLogo"/>
      <div className="groupMenu">
        <button className={isActiveMain? 'active' : 'buttonMenu'} onClick={()=> ChangeClass(isActiveMain, setisActiveMain)} >
            <Link href='/' className='buttonNavigate'>Главная</Link>
        </button>
        <button className={isaActiveSerial? 'active' : 'buttonMenu'} onClick={()=> ChangeClass(isaActiveSerial, setisaActiveSerial)}>
            <Link href='/serials' className='buttonNavigate'>Сериалы</Link>
        </button>
        <button className={isActiveFilms? 'active' : 'buttonMenu'} onClick={()=> ChangeClass(isActiveFilms, setisActiveFilms)}>
            <Link href='/films' className='buttonNavigate'>Фильмы</Link>
        </button>
        <button className={isaActiveTV? 'active' : 'buttonMenu'} onClick={()=> ChangeClass(isaActiveTV, setisaActiveTV)}>
            <Link href='/tv' className='buttonNavigate'>TV</Link>
        </button>   
      </div>
        </nav>
        <nav className="navRight">
          <div className="groupButtomDoIt">
            <button className="buttonDoIt"><Image
                    src={imgInstall}
                    alt="logo"
                    className="imgInstall"/>
                    Установить
            </button>
            <button className="buttonDoIt">7 дней за 0 р</button>
            <button className="buttonDoIt"><Image
                    src={imgDiscont}
                    alt="logo"
                    className="imgDiscont"/>Промокод</button>
            <button className="searchButton">
            <Image
                    src={imgsearch}
                    alt="logo"
                    className="imgDiscont"/>
            </button>
            <button className="goIn">
              Войти
            </button>
          </div>
        </nav>
        </nav>
    );
  }