import './App.css';
import Boton from './componentes/Boton.js'
import Pantalla from './componentes/Pantalla.js'
import BotonClear from './componentes/BotonClear.js'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregar = valor => {
    setInput(input + valor);
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
    
  }


  return (
    <div className='App'>

      <div className='logo-contenedor'>
        <h1>Calculadora por: Jesus Parra</h1>
      </div>

      <div className='contenedor-calculadora'>

      <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClic={agregar}>1</Boton>
          <Boton manejarClic={agregar}>2</Boton>
          <Boton manejarClic={agregar}>3</Boton>
          <Boton manejarClic={agregar}>+</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregar}>4</Boton>
          <Boton manejarClic={agregar}>5</Boton>
          <Boton manejarClic={agregar}>6</Boton>
          <Boton manejarClic={agregar}>-</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={agregar}>7</Boton>
          <Boton manejarClic={agregar}>8</Boton>
          <Boton manejarClic={agregar}>9</Boton>
          <Boton manejarClic={agregar}>*</Boton>
        </div>

        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregar}>0</Boton>
          <Boton manejarClic={agregar}>.</Boton>
          <Boton manejarClic={agregar}>/</Boton>
        </div>
        
        <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
        </div>
        
        
      </div>      
    </div>
  );
}

export default App;
