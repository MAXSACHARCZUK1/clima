import React from 'react';

function Clima({resultado}) {

    const {
      name,
      main,
      weather, wind
    } = resultado;

    

    if(!name) return null;

    //restar grados kelvin
    const kelvin = 273.15;

    
    return(
        <div className="card-panel  col s12">
          <div className="black-text">
            <h2>Datos Actuales del Clima en <span> {name}</span>  </h2>
            <p className="temperatura">
                 {parseInt(main.temp - kelvin, 10)} <span> {weather.icon} &#x2103;</span>

            </p>
            
            <p>Temperatura Máxima : {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
            <p>Temperatura Minima : {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            <p>Humedad : {main.humidity} % </p>
            
            <p>Velocidad del Viento {wind.speed} Km/h  </p>
         </div>  
        </div>

    )

}

export default Clima;