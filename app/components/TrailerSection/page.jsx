
import { useEffect, useState } from 'react';
import './style.scss'
import Image from 'next/image'
import imgInfo from './img/2def2458d55cceb1fd740482353bbd7c.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from '../Card/page'

export default function TrailerSection({data}) {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    const [ tagInfo, setTagInfo] = useState({
      "url": "https://s3-alpha-sig.figma.com/img/d328/27f8/e1161a5586d1fa3dfbe80ff6c7b59e22?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcKu8yZXfNGDIHH~rz3WRGHRRCCKnTKlI8JOd2NszSputUuuVNCXOGUF8RBpmJw6S5SKOtyg2ODWhT2pmF3-XKY9lCGEWeYvhmT5h6W31zV5b826Vk~NfP3mo1823mdCEN1RDMluW0z4Xyb~vFZ9yQ-1WlzPVwBDyqJzBD0h-FRTlmg~c4FzNLKGpqFxrJn3594NF86znseupOT2eKLGk2JhRJz-lc3aJryX-VpuE8yevphVaSUg6zclPN8p5wvn0PXqEQtFrN6XNB4S6fCrmwi1IgR9fpZ49vNaI53oauf~EgcTu-ornakrkDu2h2Z65Hu3Lr2IQTFmaTa23PFwNQ__",
      "rating": 7.9,
      "year": 2024,
      "genre": "Фентези",
      "country": "США",
      "age": "16+"
  })
    console.log('tagInfo', tagInfo)
    return (
     <div className='main'>
        <div className='mainInfo'>
        <div className='imgInfo'>
        <Image
            src={imgInfo}
            alt="logo"
            className="info"/>
        </div>
        <Card rating={tagInfo.rating}
         year={tagInfo.year} 
         genre={tagInfo.genre} 
         country={tagInfo.country} 
         age={tagInfo.age}/>
        </div>
        <div className="filmItemBox">
        <Slider  {...settings}>
          {data.map(el=>(
              <div onClick={()=>setTagInfo(el)}>
                <img src={el.url} className="filmItem"></img>
              </div>
            ))}
        </Slider>
        </div>
     </div>
    );
  }