import React, {useEffect, useState} from "react";

const List = ({choice, chEndpoint}) => {
  
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
          if(choice.length > 0 && chEndpoint == 'character') {
            choice.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} /> <br />
                Name: {item.name} <br /> 
                Gender: {item.gender} <br /> 
                Location: {item.location.name} <br /> 
                Random episode: <a href={item.episode[Object.keys(item.episode)[Math.floor(Math.random()*Object.keys(item.episode).length)]]} target="blank_">{item.episode[Object.keys(item.episode)[Math.floor(Math.random()*Object.keys(item.episode).length)]]}</a>
              </li>
          )) } else if(choice.length > 0 && chEndpoint == 'episode') {
            choice.map(item => (
              <li key={item.id}>
                Name: {item.name} <br /> 
                Air date: {item.air_date} <br /> 
                Episode's code: {item.episode} <br /> 
              </li>
          )) } else if(choice.length > 0 && chEndpoint == 'location') {
            choice.map(item => (
              <li key={item.id}>
                Name: {item.name} <br /> 
                Type: {item.type} <br /> 
                Dimension: {item.dimension} <br /> 
                Rsidents: {item.residents} <br /> 
                Creation date: {item.created} <br /> 
              </li>
          )) } else {
            <p>No results</p>
          }
          
          
        }
      </ul>
    </div>
    
  )
}

export default List;