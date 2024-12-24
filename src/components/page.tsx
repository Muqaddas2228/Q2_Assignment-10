"use client";
import { useState, useEffect } from "react";
export default function CoinMarket() {
    const API_KEY = "ada35a3b6babc0555a14e371"
  const [data, setData] = useState<any>(null);


  useEffect(() => {
    fetch(`https://api.coinlayer.com/live?access_key=${API_KEY}`)

      .then((response) => response.json())
      .then((jsonConverted) => {
        setData(jsonConverted);

      });
  }, []);


  return (
    <div className="container">
      <h1 className="ml-10">Fetch data</h1>

      <p><span>AED : </span>  {data?.rates?.BTC}</p>
      <p><span>AFN : </span>  {data?.rates?.ADA}</p>
      <p><span>AMD : </span>  {data?.rates?.ABC}</p>
      <p><span>AZN : </span>  {data?.rates?.ACP}</p>
      <p><span>ARS : </span>  {data?.rates?.ACT}</p>
      <p><span>AOA : </span>  {data?.rates?.ADCN}</p>
      <p><span>AWG : </span>  {data?.rates?.ADX}</p>
      <p><span>ALL : </span>  {data?.rates?.ADZ}</p>
      <p><span>AUD : </span>  {data?.rates?.AE}</p>
      <p><span>ANG : </span>  {data?.rates?.AGI}</p>
      <p><span>AED : </span>  {data?.rates?.ADA}</p>

    </div>
  );
}