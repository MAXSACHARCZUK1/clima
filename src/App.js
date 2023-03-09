import React, {useState, useEffect} from 'react';
import Header from './componets/Header';
import Formulario from './componets/Formulario';
import Error from './componets/Error';
import Clima from './componets/Clima';



function App() {

  //state principal
  const [ ciudad, guardarCiudad ] = useState('');
  const [ pais, guardarPais] = useState('');
  const [ error, guardarError ] =useState(false);
  const [ resultado, guardarResultado ] = useState({})

  useEffect(() => {
    // prevenir el error deauto consulta
  if(ciudad === '') return;

   const consultarAPI = async () => {

     //const appId = 'ebf98a9bd2231b2eff0c9d84af2fa658';

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=ebf98a9bd2231b2eff0c9d84af2fa658`;
     // consultar la URL

     const respuesta = await fetch(url);
     const resultado = await respuesta.json();

     guardarResultado(resultado);
     // guardarResultado(resultado);

   }

        consultarAPI();

  },[ ciudad, pais ]);

  const datosConsulta = datos => {
    // validar que los campos esten completos 
    if(datos.ciudad === '' || datos.pais === ''){
      // error
      guardarError(true);
      return;
    }

    // ciudad y pais estan completos , agregarlos al state
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }


 
  
  // cargar un componente condicionalmente
  let componente;
  if(error) {
    // mostrar el error
    componente = <Error mensaje= 'Selecciona  Ciudad / País par vel el Clima!' />
  }else if (resultado.cod === "404"){
    componente = < Error mensaje="La Ciudad o Pais No se encontro. Verifica los Datos" />
  }else {
    // mostrar clima !
    componente = <Clima 
           resultado={resultado}
              />;
  }



  

  return (
    <div className="App">
       <Header
        titulo='Clima con React API- Powered by AlexisLoza'
        />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
                         <div className="col s12 m6">
                            <Formulario
                            datosConsulta={datosConsulta} 
                            />
                         </div>
             
                     <div className="col s12 m6">
                      {componente}
                    </div>
          </div>
        </div>
      </div>
      <footer className="footer"> Powered By <a href="https://alexisloza.net" target="_blank" rel="noopener noreferrer">AlexisLoza</a> 
        <p>Project Github --- <a href="https://github.com/Alexiseloza/climareact"> Go to Git </a> </p>
      </footer>
    </div>
  );
}

export default App;
