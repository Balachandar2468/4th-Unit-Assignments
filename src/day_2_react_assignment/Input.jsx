//import { useState } from "react";

//import { useState } from 'react';
//import {createRoot} from 'react-dom/client';

//import { render } from '@testing-library/react';
import { useState } from 'react';
import './Input.css';


function Input() {

const [counter,setCounter]= useState(0);
// valur to represent - counter;
//function to update value - setCounter;

const handleincrement = (value)=>{
setCounter(counter+value);

};

const handledecrement = ()=>{
    setCounter(counter-1);
}

const handledouble = ()=>{
    setCounter(counter*2);
}

function color_pad(){
    if(counter % 2 === 0){
     
        //import './red.css';
    var x = document.getElementById('title');
    x.style.color=`green`;
   
    console.log(x);
        

    }else{
        var y = document.getElementById('title');
    y.style.color=`red`;
   
    console.log(y);
        
    }
   
    
}
color_pad();


return (
    <div id='box'>
<h1 id='title' >{counter}</h1>
<div id='but_box'>
    <button id='inc' onClick={()=>handleincrement(1)}>+</button>
    <button id='dec' onClick={()=>handledecrement()}>-</button>
    </div>
    <div id='double_box'>
        <button id='dbl' onClick={()=>handledouble()}>2X</button>
    </div>

    </div>
    );
   
}

export default Input;


// const[count,setCount] = useState(0);

// const inc = ()=>{
// setCount((prevState)=>prevState+1);
// }

// const dec = ()=>{
// setCount(count-1);

//  }
// onClick={inc(0)}   onClick={dec()}   {count}