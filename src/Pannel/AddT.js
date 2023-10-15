import React, { useState,useEffect, useCallback } from 'react'
import axios from 'axios';

const AddT = () => {
    const [name, setname] = useState('');
    const [des, setdes] = useState('');
    const[img,setimg]=useState('')
    
    
        
    const handler=async(e)=>{

        e.preventDefault();
        var formData = new FormData();
        formData.append("name",name);
       formData.append("des",des);
       formData.append("img",img);


      
    const config={
        headers:{
        "Content-Type":"multipart/form-data"
        }
    }
    const res=await axios.post("/addtec",formData,config)
    console.log(res);
          
       
        }
        const fileset=(e)=>{
          setimg(e.target.files[0])
      }
  return (
    <div id="f">
    <form onSubmit={handler}>
    <div id="df">
            <h2>Name Of The Technology</h2>
            <input placeholder='Full Name' name="name" autocomplete="off"  type='text' onChange={(e)=>{setname(e.target.value)}}></input>
        </div>
        <div id="df">
            <h2>Description</h2>
            <input placeholder='Full Name' name="des"  autocomplete="off" type='text' onChange={(e)=>{setdes(e.target.value)}}></input>
        </div>
        <div id="df">
        <h2>Choose Image</h2>
        <input placeholder='Enter Code Send On Email'name="img"  type='file'id="dfd"  onChange={fileset} ></input>
    </div>
        <div id="ll">
        <button type='submit'>Submit</button>
        </div>
        </form>
       
    </div>
  )
}

export default AddT