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
            <li key={item.id}>{item.name}</li>
          )) : <p>No results</p>
        }
      </ul>
    </div>
    
  )
}

export default List;