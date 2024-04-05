import { useState } from 'react'
// import PropTypes from 'prop-types';
import './App.css'
import C1 from './component1'
import C2 from './component2'
//import usestate from 'react'
import { useEffect } from 'react'

import { createApi } from "unsplash-js";

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: "wmVcPkrtZ-E694ea2XMKcvMhcyNkFXqjg_hKHIQq55w"
});

function App() {
  const [location, setLocation] = useState('delhi');
  const [data, setData] = useState(null);
  let image ='https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb';
useEffect(() => {
  if(data)
  {api.search
    .getPhotos({ 
      query: data.current.condition.text + " weather" +data.location.name,
    
      orientation: "landscape"
    })
    .then((result) => {
      console.log(result.response);
    document.body.style.backgroundImage = `url(${result.response.results[0].urls.regular})`;
      //background image should fit screen
      document.body.style.backgroundSize = "cover";

    })
    .catch(() => {
      console.log("something went wrong!");
    })}
  },[data]);
  async function get()
{    try{
 let str= await fetch('https://api.weatherapi.com/v1/current.json?key=69a8dc78bacb4de8adb175747242201&q='+location, {mode: 'cors'});
  str= await str.json();
  if(str.error){
    throw new Error(str.error.message);
  }
return str;
}
catch(e){
  console.log(e);
}}

useEffect(() => {
  get().then((str) => {
    setData(str);
  })
 },[location])
 function change(city){ 
  
  setLocation(city);
  

}

document.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    let city=document.getElementById('location').value;
    change(city);
  }
}
);

document.addEventListener("keydown", function(event) {
  if (event.key.length===1) {
    document.getElementById('location').focus();
  }
}
);

  return (<>
    
       
      <div className="container" >
        <C1 data={data} change={change}/>
        <C2 data={data}/>

      </div>
    </>
  )
}

export default App
