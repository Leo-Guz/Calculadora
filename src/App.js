import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Screen from './componentes/Screen';
import BtnNumber from './componentes/BtnNumber';
import BtnOperation from './componentes/BtnOperation';
import BtnEffect from './componentes/BtnEffect';
import BtnClear from './componentes/BtnClear';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("No has ingresado ningun valor");
    }
  };
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Screen input={input}/>
        <div className='fila'>
          <BtnNumber manejarClic ={agregarInput}>1</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>2</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>3</BtnNumber>
          <BtnOperation manejarClic={agregarInput}>+</BtnOperation>
        </div>
        <div className='fila'>
          <BtnNumber manejarClic={agregarInput}>4</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>5</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>6</BtnNumber>
          <BtnOperation manejarClic={agregarInput}>-</BtnOperation>
        </div>
        <div className='fila'>
          <BtnNumber manejarClic={agregarInput}>7</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>8</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>9</BtnNumber>
          <BtnOperation manejarClic={agregarInput}>*</BtnOperation>
        </div>
        <div className='fila'>
          <BtnNumber manejarClic={agregarInput}>.</BtnNumber>
          <BtnNumber manejarClic={agregarInput}>0</BtnNumber>
          <BtnClear manejarClear={() => setInput('')}>AC</BtnClear>
          <BtnOperation manejarClic={agregarInput}>/</BtnOperation>
        </div>
        <div className='fila-larga'>
          <BtnEffect manejarClic={calcularResultado}>=</BtnEffect>
        </div>
      </div>
    </div>
  );
}

export default App;
