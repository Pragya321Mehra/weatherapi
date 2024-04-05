/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './component2.css'
import React from 'react';
import { useState } from 'react';

export default function C2({data}) {
    console.log(data);
  if(data){return (<>
        <div className='container2'>
            <div className="text">
            <h1>  {data.current.condition.text}</h1>
            <h2>Wind Speed: {data.current.wind_kph} km/hr</h2>
            <h2>Wind Direction: {data.current.wind_dir}</h2>
            <h2>Humidity: {data.current.humidity}%</h2>
            <h2>Pressure: {data.current.pressure_mb} mbar</h2>
            <h2>Cloud Cover: {data.current.cloud}%</h2>
            
            </div>
        
        </div>
    
    </>)}else{
        return (<>
            <div className='container2'>
            
            </div>
        </>)
    }
}
