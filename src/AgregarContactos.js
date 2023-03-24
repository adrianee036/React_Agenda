// eslint-disable-next-line
import logo, { ReactComponent } from './logo.svg';
import React, { useState } from "react";
import './App.css';



function AgregarContactos()
{
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
        nombre,
        apellido,
        telefono
    };

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify(dataToSubmit)
    }).then(() => {

    })
  }  
     

  return (
    <div className="App">
    <form method='post' action='#' onSubmit={handleFormSubmit}>
      <span><b>Nombre:</b></span>&nbsp;
    <input type="text" name='nombre' value={nombre} onChange={(event)=> setNombre(event.target.value)}/>&nbsp;&nbsp;
    <span><b>Apellido:</b></span>&nbsp;
    <input type="text" name='apellido' value={apellido} onChange={(event)=> setApellido(event.target.value)}/>&nbsp;&nbsp;
    <span><b>Teléfono:</b></span>&nbsp;
    <input type="text" name='telefono' value={telefono} onChange={(event)=> setTelefono(event.target.value)}/>&nbsp;&nbsp;
    <button>Agregar</button>
    </form>
    <br/><br/><br/>
    </div>
  );
  
}


export default AgregarContactos;
