import React from 'react';

const Option =(props)=>{
     const changeHandler=(event)=>{
           props.setCategory(event.target.value)// passed the selected value to the state via props.
     }
  
  
  return (
      // onChange would run the change handler function
      <div>
        <select onChange ={changeHandler}>
          <option>Pentatonic</option>
          <option>Blues</option>
          <option>Dorian</option>
        </select>
      </div>
    );
}

export default Option;