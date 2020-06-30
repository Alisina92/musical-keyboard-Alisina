import React from 'react';
import Title from './Title'
import Keyboard from'./Keyboard';
import Options from './Options';
 
import './App.css';

const App=()=> {
   /*Component added to App:
    <Title/>
    <Keyboard/>
    <Options/>
   */
  return (
    <div className="App">
    <Title/>
    <Keyboard/>
    <Options/>
    </div>
  );
}

export default App;
