import React from "react";
import SlotM from "./SlotMachine";


const App =()=>
{
return <>
    <h1 className="heading_style">
          🎰 welcome to <span style={{fontWeight:"bold"}}>slot machine game 🎰</span> 
    </h1>
    <div className="slotMachine">
    <SlotM X='🚬' y='💃' z='🥪'/>
    <hr/>
    <SlotM  X='🚬' y='💃' z='🥪'/>
    <hr/>
    <SlotM X='🚬' y='💃' z='🥪'/>
    <hr></hr>
    <SlotM X='🚬' y='💃' z='🥪'/>
    </div>
</>;
};
export default App;
