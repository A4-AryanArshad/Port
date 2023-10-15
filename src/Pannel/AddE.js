import React, { useState,useEffect, useCallback } from 'react'


import { Link } from 'react-router-dom';

import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';
import axios from"axios";

const AddE = () => {
  const [Role, setRole] = useState('')
  const [CompanyName, setCompanyName] = useState('')
  const [Description, setDescription] = useState('')
  const[img,setimg]=useState('')
    const navigate=useNavigate();
        
    

        const loguser=async(e)=>{
         
          e.preventDefault();
          var formData = new FormData();
          formData.append("Role",Role);
         formData.append("CompanyName",CompanyName);
         formData.append("Description",Description);
        
         formData.append("img",img);
        
      const config={
          headers:{
          "Content-Type":"multipart/form-data"
          }
      }
      const res=await axios.post("/adde",formData,config)
      console.log(res);
            
          }

          const fileset=(e)=>{
    setimg(e.target.files[0])
}

  return (
    <>
    <div id="f">
<form onSubmit={loguser}>
<div id="df">
        <h2>Role In Company</h2>
        <input placeholder='Full Name' name="Role" type='text' autocomplete="off" value={Role} onChange={(e)=>{setRole(e.target.value)}}></input>
    </div>
<div id="df">
        <h2>Name Of Company</h2>
        <input placeholder='Full Name' name="CompanyName" type='text' autocomplete="off"  value={CompanyName} onChange={(e)=>{setCompanyName(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Description </h2>
        <input placeholder='Full Name' name="Description" type='text'  autocomplete="off" value={Description} onChange={(e)=>{setDescription(e.target.value)}}></input>
    </div>

    <div id="df">
        <h2>Choose Image</h2>
        <input placeholder='Enter Code Send On Email'name="img" type='file'id="dfd"  onChange={fileset}  ></input>
    </div>
    <div id="ll">
    <button type='submit'>SUBMIT</button>
    </div>
    </form>
   
</div>
    </>
  )
}

export default AddE