import React, {useEffect, useState} from "react";

const List = ({choice}) => {
  
  /* const addData = (newData) => {
    setData([
      ...data,
      1
    ]);
  } */

  return (
    <div>
      <h3> list:</h3>
      <ul>
        {
          choice.length > 0 ? choice.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} /> <br />
                Name: {item.name} <br /> 
                Gender: {item.gender} <br /> 
                Location: {item.location.name} <br /> 
                Random episode: <a href={item.episode[Object.keys(item.episode)[Math.floor(Math.random()*Object.keys(item.episode).length)]]} target="blank_">{item.episode[Object.keys(item.episode)[Math.floor(Math.random()*Object.keys(item.episode).length)]]}</a>
                
              </li>
          )) : <p>No results</p>
        }
      </ul>
    </div>
    
  )
}

export default List;