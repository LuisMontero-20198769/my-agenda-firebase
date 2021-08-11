import {useState, useEffect} from 'react';
import {baseDatos} from './ConfigFirebase';
import ContactoNuevo from './componentes/contantoNew';
import './App.css';


function App() {
  const [contactos, setContactos] = useState([]);

  function addNuevoContacto(contacto){
    setContactos(contactos.slice().push(contacto));
  }

  function CargarContactos(){
    const listado = [];
    baseDatos.collection('contactos').get()
    .then(resultado => {
      resultado.forEach( contacto=>{
        listado.push(contacto.data());
      })
      setContactos(listado);
    }).catch(error => console.log(error));
  }

  useEffect(CargarContactos, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <ContactoNuevo addNuevoContacto = {addNuevoContacto}/>
      </header>
    </div>
  );
}

export default App;
