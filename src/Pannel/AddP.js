import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';

import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';
import axios from"axios";




const AddP = () => {
    const [name, setname] = useState('');
const [description, setdescription] = useState('');
const[img,setimg]=useState('')
const [link, setlink] = useState('')
const [addinlist, setaddinlist] = useState('')

    






   

      const navigate=useNavigate();
          
      
  
          const handler=async(e)=>{
           
            e.preventDefault();
            var formData = new FormData();
            formData.append("name",name);
           formData.append("description",description);
           formData.append("link",link);
           formData.append("addinlist",addinlist);
    
          
           formData.append("img",img);
          
        const config={
            headers:{
            "Content-Type":"multipart/form-data"
            }
        }
        const res=await axios.post("/addp",formData,config)
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
        <h2>Name</h2>
        <input placeholder='Full Name' name="name" type='text' autocomplete="off"  onChange={(e)=>{setname(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Add In List</h2>
        <input placeholder='Full Enter Your Email Address'name="desription" autocomplete="off" type='text' onChange={(e)=>{setaddinlist(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Descriptipn</h2>
        <input placeholder='Full Enter Your Email Address'name="desription" type='text' autocomplete="off"  onChange={(e)=>{setdescription(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Link</h2>
        <input placeholder='Full Enter Your Email Address'name="link" type='text' autocomplete="off"  onChange={(e)=>{setlink(e.target.value)}}></input>
    </div>
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

export default AddP