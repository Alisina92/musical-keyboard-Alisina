import React from 'react';
import * as Tone from "tone";
const synth = new Tone.Synth().toMaster();

const Key =(props)=>{
const soundHandler =()=>{
    props.name === "Key-C4"
      ? synth.triggerAttackRelease("C4", "8n")
      : props.name === "Key-E4"
      ? synth.triggerAttackRelease("E4", "8n")
      : props.name === "Key-G4"
      ? synth.triggerAttackRelease("G4", "8n")
      : props.name === "Key-B4"
      ? synth.triggerAttackRelease("B4", "8n")
      : synth.triggerAttackRelease(0);
        }
  
    return (<button onClick={soundHandler}>{props.name}</button>);

  }

 export default Key;