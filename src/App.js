import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [coordenation, setCoordination] = useState(false);
  const [weather, setWeather] = useState(false);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setCoordination(true)
    })
  }, [])

  if (coordenation == false) {
    return (
      <Fragment>
        Por favor, permita o acesso para obter dados sobre o clima
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <h3>Previsão do Clima</h3>
        <hr/>
        <ul>
          <li>Temperatura atual: xº</li>
          <li>Temperatura máxima: xº</li>
          <li>Temperatura mínima: xº</li>
          <li>Pressão: x hpa</li>
          <li>Umidade: x%</li>
        </ul>
      </Fragment>
    );
  }
}

export default App;
