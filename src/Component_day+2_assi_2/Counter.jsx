
import React from "react";



function Counter () {

    const [count,setcount] = React.useState(100);


    React.useState(()=>{
        const id = setInterval(()=>{
            
                setcount(function (prev){
                    if( prev === 0){
                        clearInterval(id);
                        return prev;
                    }
                    
                   return prev - 1; 
                });
            
        },1000)
    },[]);
    

   










return (
    <>
    <div>
<h1>{count}</h1>
    </div>
    </>

)






}
export default Counter;