import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';


import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';


const DelCv = () => {
    const [name, setname] = useState('updated');
    
    const navigate=useNavigate();
        
    const handler=async(e)=>{
        e.preventDefault();
        const res=await fetch('/delcv',{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
   name
          })
        })
        const data=res.json();
        
          
        }

 
  return (
 <>
  <div id="f">
<form onSubmit={handler}>

    <div id="ll">
    <button type='submit'>Delete</button>
    </div>
    </form>
   
</div>
 
 </>
  )
}

export default DelCv