import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';


import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';


const DelE = () => {
    const [Name, setName] = useState('');
    
    const navigate=useNavigate();
        
    const handler=async(e)=>{
        e.preventDefault();
        const res=await fetch('/dele',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
   Name
          })
        })
        const data=res.json();
        
          
        }

 
  return (
 <>
  <div id="f">
<form onSubmit={handler}>
<div id="df">
        <h2>Name Of Company</h2>
        <input placeholder='Full Name' name="Name" type='text' autocomplete="off"  onChange={(e)=>{setName(e.target.value)}}></input>
    </div>

    <div id="ll">
    <button type='submit'>Delete</button>
    </div>
    </form>
   
</div>
 
 </>
  )
}

export default DelE