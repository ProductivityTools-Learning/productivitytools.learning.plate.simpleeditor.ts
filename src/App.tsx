import React, { useState } from 'react';
import PTPlate from './Components/PTPlate';


function App() {

  const [content,setContent]=useState<string>("initial value")

  return (
    <div className="App">
    hello
    
    <input type='text' onChange={x=>setContent(x.target.value)}></input><br></br>
    raw content:{content}<br></br>
    plate:
    <PTPlate content={content}></PTPlate>
    </div>
  );
}

export default App;
