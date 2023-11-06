import React, { useEffect, useState } from 'react'
import './Crypot.css'

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false";
const CryptoDashboard = () => {
   const [data,setData] = useState([]);
   useEffect(()=>{
    fetch(url).then((res)=>res.json())
    .then(data => setData(data));
  },[])
  
  return (
    <>
    <h1 className="heading">Crypto Dashboard</h1>
  
    <div className="card-container">
        {data.map((item)=>{
            return(
                <div className="card" key={item.id}>
                <div className="image">
                  <img className="img" src={item.image} /> 
                </div>
        
                <div className="details">
                  <div className="row">
                    <span className="name">{item.name}</span>
                    <span className="price">{item.current_price}</span>
                  </div>
        
                  <div className="row">
                    <span className="symbol">{item.symbol}</span>
                    <span className={item.market_cap_change_percentage_24h < 0 ? "negative": "positive"}>{item.market_cap_change_percentage_24h}%</span>
                  </div>
                </div>
              </div> 
            )
        })}
    </div>
    </>
  )
}

export default CryptoDashboard