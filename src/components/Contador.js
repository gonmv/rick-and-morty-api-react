import React, {Fragment, useState} from 'react';

const Contador = () => {

  const [numero, setNumero] = useState(0);

  const aumentar = () => {
    setNumero(numero+1);
  } 

  return (
    <Fragment>
      <h3>{numero}</h3>
      <button onClick={aumentar}>+1</button>
    </Fragment>
  );
}

export default Contador;