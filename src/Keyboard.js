import React from 'react';
import Key from './Key';
const Keyboard =(props)=>{
    /* Keyboard returns list of keys then would use ternary to return a correct key based on The selected option   */ 
  return (
    <div>
      {props.category === "Pentatonic" ? (
        <div>
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-C4"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-E4"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-G4"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-B4"
          />
        </div>
      ) : props.category === "Blues" ? (
        <div>
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-C5"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-E5"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-G5"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-B5"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-F5"
          />
        </div>
      ) : (
        props.category === "Dorian"?
         <div>
        <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-C6"
          />
          <Key
            category={props.setCategory}
            setCategory={props.setCategory}
            name="Key-E6"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-G6"
          />
          <Key
            category={props.category}
            setCategory={props.setCategory}
            name="Key-B6"
         />
         </div>:''
        )}
    </div>
  );
}

export default Keyboard;