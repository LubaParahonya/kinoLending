"use client";
import TrailerSection from "./components/TrailerSection/page";
import BlocNews from "./components/BlocNews/page";
import BlockInfo from "./components/BlockInfo/page";
import Top from "./components/Top/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [dataTop, setDataTop] = useState([]);
  const [dataNews, setDataNews] = useState([]);
  const URI_FLY_API = 'https://lubaparahonya.github.io/kinoJson/kino.json'

  const getApiData = async () => {
    try{
      const response = await fetch(URI_FLY_API)
      .then((response) => response.json());
      setDataTop(response[2].top10);
      setData(response[0].card);
      setDataNews(response[1].cardRating);
    }catch(error){
      console.log(error);
    }
  };

useEffect(()=>{
    getApiData()
}, []);
  
  return (
    <>
    <TrailerSection data={data}/>
    <BlocNews dataNews={dataNews}/>
    <BlockInfo/>
    <Top dataTop={dataTop}/>
    </>
  );
}
