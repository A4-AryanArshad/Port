import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';

import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';
import axios from"axios";




const Cv = () => {
    const [name, setname] = useState('updated');

const[img,setimg]=useState('')


    






   

      const navigate=useNavigate();
          
      
  
          const handler=async(e)=>{
           
            e.preventDefault();
            var formData = new FormData();
            formData.append("name",name);
    
          
           formData.append("img",img);
          
        const config={
            headers:{
            "Content-Type":"multipart/form-data"
            }
        }
        const res=await axios.post("/addcv",formData,config)
        console.log(res);
              
            }
  
            const fileset=(e)=>{
      setimg(e.target.files[0])
  }
  return (
    <>
    



<div id="f">
<form onSubmit={handler}>

    <div id="df">
        <h2>Choose Image</h2>
        <input placeholder='Enter Code Send On Email'name="img" type='file'id="dfd"  onChange={fileset} ></input>
    </div>
    <div id="ll">
    <button type='submit'>SUBMIT</button>
    </div>

    </form>
   
</div>

    
    </>
  )
}

export default Cv