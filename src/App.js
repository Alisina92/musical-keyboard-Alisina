import React, { useState } from 'react';// imported the use state
import Title from './Title'
import Keyboard from'./Keyboard';
import Options from './Options';
 
import './App.css';

const App=()=> {
    const [category, setCategory] = useState("Pentatonic");// state to determine the status of options 
 
     /*Passed the states into the Components as a props */
     /*defined 3 components  */
     /*Title*/
     /* Keyboard */
     /*Options */
    return (
    <div className="App">
      <Title />
      <Keyboard category={category} setCategory={setCategory} /> 
      <Options category={category} setCategory={setCategory} />
    </div>
  );
}

export default App;
