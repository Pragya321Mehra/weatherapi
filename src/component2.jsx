/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './component2.css'
import React from 'react';
import { useState } from 'react';

export default function C2({data}) {
  if(data){return (<>
        <div className='container2'>
        

        </div>
    
    </>)}else{
        return (<>
            <div className='container2'>
            
            </div>
        </>)
    }
}
