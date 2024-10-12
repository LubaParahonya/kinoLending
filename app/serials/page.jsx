"use client";
import { useEffect, useState } from "react";
import SerialTopPart from '../components/SerialTopPart/page'
import SerialAdvertising from '../components/SerialAdvertising/page'
import SerialsList from '../components/SerialsList/page'
import SerialDiscription from '../components/SerialDiscription/page'
import SerialsReviews from '../components/SerialsReviews/page'


export default function Home() {
  const [dataFilms, setDataFilms] = useState([]);
  const [dataReview, setDataReview] = useState([]);
  const URI_FLY_API = 'https://lubaparahonya.github.io/kinoJson/kino.json'

  const getApiData = async () => {
    try{
      const response = await fetch(URI_FLY_API)
      .then((response) => response.json());
      setDataFilms(response[3].films);
      setDataReview(response[4].reviews)
    }catch(error){
      console.log(error);
    }
  };

useEffect(()=>{
    getApiData()
}, []);
  
  return (
    <>
    <SerialTopPart />
    <SerialAdvertising />
    <SerialsList dataFilms={dataFilms}/>
    <SerialDiscription />
    <SerialsReviews dataReview={dataReview}/>
    </>
  );
}
