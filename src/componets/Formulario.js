import React, {useState} from 'react';



function Formulario({datosConsulta}) {
    

    //state del componente
    // busqueda es igual a STATE. guardarBusqueda es igual a setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad : '',
        pais : ''
    })

    const handleChange = e => {
        // cambiar el State
        guardarBusqueda({
          ...busqueda,
          [e.target.name] : e.target.value
        });
    }

    const consultarClima = e => {
        e.preventDefault();

        // pasar hacia el componente principal la busqueda
        datosConsulta(busqueda);

    }


    return(
        <form
        onSubmit={consultarClima}
        >
            <div className="input-field col s12 ">
                <input 
                 type="text"
                 name="ciudad"
                 id="ciudad"
                 onChange={handleChange}
                
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecciona tu País</option>
                    <option value="AR">Argentina</option>
                    <option value="BO">Bolivia</option>
                    <option value="BR">Brasil</option>
                    <option value="CL">Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="IN">India</option>
                    <option value="IE">Irlanda</option>
                    <option value="IT">Italia</option>
                    <option value="PY">Paraguay</option>
                    <option value="GB">Reino Unido</option>
                    <option value="TR">Turquía</option>
                    <option value="US">United States</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className=" waves-effect waves-light btn-large btn-block yellow  accent-4" value=" Ver Clima" />
            </div>
        </form>

    )


}
export default Formulario;
