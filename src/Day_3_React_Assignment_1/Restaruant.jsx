

import React from 'react';
import './Restaurant.css';
import Data from './data.json';
//import {v4 as uuid} from 'uuid';



function Restaurant(){

   
    const handlechange = ()=>{
     
         var selected= document.getElementById("sort").value;
        console.log(selected);

       if(selected === "4+ Star"){
       
      console.log(Data); 
       
    
           
       }else if(selected === "3+ Star"){
        console.log(3);

       }else if(selected === "3+ Star"){
        console.log(2);

       }else {
        console.log(1);

       }

       
    }

//var key_value = uuid();


   return(
       <>
       <div id='box'>
           <div id='heading'>
<h1>Restaruant Chart</h1>
           </div>

           <div id='sort_box'>
           <form>
           <select id='sort'  onChange={handlechange}  >
            <option key={0} value="Sort">Sort</option> 
            <option key={1} value="4+ Star">4+ Star</option>
            <option key={2} value="3+ Star">3+ Star</option>
            <option key={3} value="2+ Star">2+ Star</option>
            <option key={4} value="1+ Star">1+ Star</option>
        </select>
</form>
           </div>
          <div id='posts'>
{Data.map(post => {
    return(
        <div id='div'>

        <img alt='' src={post.imgURL}></img>
        <div>
            <h4 id='title'>{post.title}</h4>
            <h6>{post.Cusine}</h6>
            <h6>Cost for One is ₹ {post.sellingPrice}</h6>
            <h6>It takes{post.time}</h6>
            <div id='rating'>
            <h4 id='id'>{post.id}</h4>
            </div>
            <div id='button'>
            <button>Order Online </button>
            </div>
        </div>
        </div>
    )
})}
          </div>

       </div>
       
       </>
   )
}
Restaurant();


export default Restaurant;