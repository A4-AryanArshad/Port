import React, { useState,useEffect, useCallback } from 'react'
import './SignUp.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
const [name, setname] = useState('');
const [email, setemail] = useState('');
const navigate=useNavigate();
    

    const handler=(e)=>{
e.preventDefault();
navigate(`/Room/${email}`)

    }

    const handlerr=async(e)=>{
           
        e.preventDefault();
        var formData = new FormData();
        formData.append("name",name);
       formData.append("email",email);
    

      

      
    const config={
        headers:{
        "Content-Type":"multipart/form-data"
        }
    }
    const res=await axios.post("/addroomx",formData,config)
    console.log(res);
          
        }
   
  return (



    <>
  <div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
<div id="ucen">
<div id="cen">
    <h2>Fill Form</h2>
    <h2>Start Descussion</h2>
</div>
</div>
<div id="lo">
<div id="contector">
<div id="f">
<form onSubmit={handler}>
<div id="df">
        <h2>Name</h2>
        <input placeholder='Full Name' name="name" type='text'  autocomplete="off" onChange={(e)=>{setname(e.target.value)} }></input>
    </div>
    <div id="df">
        <h2>Email Address</h2>
        <input placeholder='Full Enter Your Email Address'name="email" type='text' autocomplete="off" onChange={(e)=>{setemail(e.target.value)}}></input>
    </div>
    <div id="ll">
    <button type='submit'>SUBMIT</button>
    </div>
    </form>
   
</div>
</div>
</div>

<div id="fot">
<Footer/>
</div>

    </>

  )
}

export default Login