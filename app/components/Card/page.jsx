import './style.scss'


export default function Card({rating, year, genre, country, age}) {

    return (
        <ul className='tagsInfo'>
        <li className='tag'><span>{rating}</span></li>
        <li className='tag'><span>{year}</span></li>
        <li className='tag'><span>{genre}</span></li>
        <li className='tag' ><span>{country}</span></li>
        <li className='tag'><span>{age}</span></li>
    </ul>
    );
  }