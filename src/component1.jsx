/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 import React from 'react';
 import './component1.css'
 export default function C1( {data, change}){
  
    
if(data){return (<>
<div className="container1">
    <div className='searchbar'>
        <img src="https://cdn-icons-png.flaticon.com/512/3534/3534501.png" alt="" />
       <input type="text" placeholder="Search.." id="location"></input>
         <button onClick={()=>{
              let city=document.getElementById('location').value;
              change(city);
            
         }}><img src='https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png' ></img></button>
    </div>
    
  <h1>   {data.location.name}, {data.location.region}</h1>  

    <h1>{data.location.country}</h1>
    <div className="temp">
    <img src={data.current.condition.icon} alt="weather"></img>
    <h3>{data.current.temp_c}°C</h3>
    </div>
    
  </div>

</>)}
else{
    return (<>
    <div className="container1">
       <input type="text" placeholder="Search.." id="location"></input>
         <button onClick={()=>{
              let city=document.getElementById('location').value;
              change(city);
            
         }}>Search</button>
  <h1>NO LOCATION FOUND</h1>
  </div>
  </>)
}
}
