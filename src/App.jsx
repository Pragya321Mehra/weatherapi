import { useState } from 'react'
// import PropTypes from 'prop-types';
import './App.css'
import C1 from './component1'
import C2 from './component2'
//import usestate from 'react'
import { useEffect } from 'react'


function App() {
  const [location, setLocation] = useState('delhi');
  const [data, setData] = useState(null);
  async function get()
{    
 let str= await fetch('https://api.weatherapi.com/v1/current.json?key=69a8dc78bacb4de8adb175747242201&q='+location, {mode: 'cors'});
  str= await str.json();
return str;
}
useEffect(() => {
  get().then((str) => {
    setData(str);
  })
 },[location])
 function change(city){ 
  
  setLocation(city);
  

}
  return (<>
    
       
      <div className="container">
        <C1 data={data} change={change}/>
        <C2 data={data}/>

      </div>
    </>
  )
}

export default App
