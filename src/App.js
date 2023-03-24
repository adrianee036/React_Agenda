// eslint-disable-next-line
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import MostrarContactos from './MostrarContactos';
import AgregarContactos from './AgregarContactos';



function App()
{
  

  return (
    <div className="App">
      <p><b>Agenda React</b></p>
      <br/>
      <AgregarContactos />
      <MostrarContactos />
    
        </div>
  );
  
}


export default App;
