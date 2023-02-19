import './App.css';
import Contador from './componentes/Contador.js'
import Boton from './componentes/Boton'
import { useState } from 'react';


function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }


  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (

    <div className="App">

      <div className='titulo'>
        <h1>Contador de clics con React</h1>
      </div>

      <div className='contenedor-principal'>

        <Contador numClics={numClics} />

        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
         />

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
         />
      </div>
    </div>

  );

}

export default App;
