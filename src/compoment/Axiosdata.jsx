import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";

function Axiosdata() {
  const [data, setData] = useState('');
  const getAllData = () => {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((response) => {
        console.log(response.data);
        console.log(response)
        setData(response.data['drinks']);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getAllData();
  }, []); 
  return (
    <>
    {console.log(data[0])}
      {data.length>0 ?
        data.map((item,index) => {
          console.log("hwklooo===",item)
          return (
            <div className="data" key={item.idDrink}>
              <div className='cover'>
              <h3>{item.strDrink}</h3>
              <img src={item.strDrinkThumb} className="imge"></img>
              </div>
            </div>
          )
        }) : <h3>No data yet</h3>
      }
    </>
  )
} 


export default Axiosdata;