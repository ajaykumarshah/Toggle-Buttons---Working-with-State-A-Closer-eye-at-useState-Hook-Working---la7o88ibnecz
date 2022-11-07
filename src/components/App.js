import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [current, setCurrent] = useState('ON');
  const [current2, setCurrent2] = useState('OFF');

  const handleClick = (event) => {


    if (event.target.innerText == 'ON') {
      setCurrent(() => 'OFF');
      setCurrent2(() => 'ON');
    }
    else {
      setCurrent(() => 'ON');
      setCurrent2(() => 'OFF');
    }
  }








  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {current}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {current2}
      </button>
    </div>
  );
}


export default App;
