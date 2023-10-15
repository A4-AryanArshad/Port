import React, { useState,useEffect, useCallback } from 'react'

import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useSocket } from '../Context/SocketProvider';
import { useNavigate } from 'react-router-dom';

const Chatlogin = () => {
    const [name, setname] = useState('');
const [email, setemail] = useState('');
const navigate=useNavigate();
    

    const handler=(e)=>{
e.preventDefault();
navigate(`/ChatPage/aryan`)
//navigate(`/Room/${email}`)

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
        <input placeholder='Full Name' name="name" type='text' onChange={(e)=>{setname(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Email Address</h2>
        <input placeholder='Full Enter Your Email Address'name="email" type='text' onChange={(e)=>{setemail(e.target.value)}}></input>
    </div>
    <div id="df">
        <h2>Enter Code</h2>
        <input placeholder='Enter Code Send On Email'name="email" type='text' ></input>
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

export default Chatlogin