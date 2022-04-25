



import React, { useEffect, useState } from "react";
 function Counter(){

    const[counte,setcounte] = useState(0)

    
// valur to represent - counter;
//function to update value - setCounter;

useEffect (() => {
    console.log("Mounted and Rendered");
    
},[counte]);




const handleincrement = ()=>{
setcounte(counte+1);

};

const handledecrement = ()=>{
    setcounte(counte-1);
}



    return (
        <div id='box'>
    <h1 id='title' >{counte}</h1>
    
        <button id='inc' onClick={()=>handleincrement()}>+</button>
        <button id='dec' onClick={()=>handledecrement()}>-</button>
        
       
    
        </div>
        );
       
    }


export default Counter;