import React from 'react';
import * as Tone from "tone";
const synth = new Tone.Synth().toMaster();

const Key =(props)=>{
      
const soundHandler =()=>{
        /* is a function responsible for playing the sound based on the category selected  then using ternary to match the function that releases each sound to the key name  */
    if (props.category === "Pentatonic"){
           props.name === "Key-C4"
           ? synth.triggerAttackRelease("C4", "8n")
           : props.name === "Key-E4"
           ? synth.triggerAttackRelease("E4", "8n")
           : props.name === "Key-G4"
           ? synth.triggerAttackRelease("G4", "8n")
           : props.name === "Key-B4"
           ? synth.triggerAttackRelease("B4", "8n")
           : synth.triggerAttackRelease(0);

       }else if(props.category === "Blues"){
           props.name === "Key-C5"
             ? synth.triggerAttackRelease("C5", "8n")
             : props.name === "Key-E5"
             ? synth.triggerAttackRelease("E5", "8n")
             : props.name === "Key-G5"
             ? synth.triggerAttackRelease("G5", "8n")
             : props.name === "Key-B5"
             ? synth.triggerAttackRelease("B5", "8n")
             :props.name === "Key-F5"
             ? synth.triggerAttackRelease("F5", "8n")
             : synth.triggerAttackRelease(0);
       }else{
         props.name === "Key-C6"
           ? synth.triggerAttackRelease("C6", "8n")
           : props.name === "Key-E6"
           ? synth.triggerAttackRelease("E6", "8n")
           : props.name === "Key-G6"
           ? synth.triggerAttackRelease("G6", "8n")
           : props.name === "Key-B6"
           ? synth.triggerAttackRelease("B6", "8n")
           : synth.triggerAttackRelease(0);  
       }
        }
  
    return (
      <button  className="Key"  onClick={soundHandler}>
        {props.name}
      </button>
    );//OnClick which runs the function to play the sound

  }

 export default Key;