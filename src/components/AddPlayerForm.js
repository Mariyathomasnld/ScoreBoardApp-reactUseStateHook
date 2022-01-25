import React from "react";
import { useState } from "react";
import "../style/playerform.scss"

export default function AddPlayerForm(props) {

const [name,setName]=useState("")

const addPlayer =()=>{
props.addPlayer(name)

}


  return (
    <div className="AddPlayerForm">
      <div className ="formfield">

        New player :{" "}
        <input type="text" placeholder="name" value ={name} onChange={(event)=>setName (event.target.value)}></input> </div>
        <button onClick={addPlayer}>Add Player</button>
     
    </div>
  );
}
  