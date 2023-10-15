import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';

import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';

const AddH = () => {
    const [heading, setheading] = useState('');
    const [description, setdescription] = useState('');
    const navigate=useNavigate();
        
    
   
            const handler=async(e)=>{
                e.preventDefault();
                const res=await fetch('/addh',{
                  method:"POST",
                  headers:{
                    "Content-Type":"application/json"
                  },
                  body:JSON.stringify({
           heading,description
                  })
                })
                const data=res.json();
                
                  
                
        
    
       
        }
  return (
    <>
    



    <div id="f">
    <form onSubmit={handler}>
    <div id="df">
            <h2>Heading</h2>
            <input placeholder='Full Heading' autocomplete="off"  name="Heading" type='text' onChange={(e)=>{setheading(e.target.value)}}></input>
        </div>
        <div id="df">
            <h2>Descriptipn</h2>
            <input placeholder='Full Enter Your Email Address'autocomplete="off" name="description" type='text' onChange={(e)=>{setdescription(e.target.value)}}></input>
        </div>
    
        <div id="ll">
        <button type='submit'>SUBMIT</button>
        </div>
        </form>
       
    </div>
    
        
        </>
  )
}

export default AddH