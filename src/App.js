import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Footer from './Mcomponents/Footer'
import Logo from './Mcomponents/Logo';


function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <>
     
    
    <div class="banner">
             <Logo></Logo>
             <h1>Calculator App</h1>
             <p>Your go-to tool for quick calculations</p>
    </div>
      
     <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={handleClear} className="clear-button">
          C
        </button>
      </div>
    </div>

    <Footer></Footer>
    
    </>
  );
}

export default App;
