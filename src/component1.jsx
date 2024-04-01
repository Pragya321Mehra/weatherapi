/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 import React from 'react';
 import './component1.css'
 export default function C1( {data, change}){
    console.log(data);
    
if(data){return (<>
       <input type="text" placeholder="Search.." id="location"></input>
         <button onClick={()=>{
              let city=document.getElementById('location').value;
              change(city);
            
         }}>Search</button>

  <h1>{data.location.name}</h1>  
  

</>)}
else{
    return (<>
       <input type="text" placeholder="Search.." id="location"></input>
         <button onClick={()=>{
              let city=document.getElementById('location').value;
              change(city);
            
         }}>Search</button>
  <h1>Delhi</h1>
  </>)
}
}
