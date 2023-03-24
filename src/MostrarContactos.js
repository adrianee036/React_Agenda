import React, { useEffect, useState } from "react";
import './App.css';



function MostrarContactos()
{

  
  const [users, setUsers] = useState();

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "http://www.raydelto.org/agenda.php"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);


  return (
    <div className="App">
    <tr><th>Nombre</th><th>Apellido</th><th>Telefono</th></tr>
      {users &&
        users.map((user) => (
          <tr><td>{user.nombre}</td><td>{user.apellido}</td><td>{user.telefono}</td></tr>

        ))}
    
    </div>
  );
  
}



export default MostrarContactos;
