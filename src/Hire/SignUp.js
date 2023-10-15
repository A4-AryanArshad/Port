import React from 'react'
import './SignUp.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
const SignUp = () => {
  return (
    <>
   
<div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
<div id="ucen">
<div id="cen">
    <h2>Con</h2>
    <h2>Send Message</h2>
</div>
</div>
<div id="lo">
<div id="contector">
<div id="f">
    <div id="df">
        <h2>Name</h2>
        <input placeholder='Full Name' autocomplete="off" type='text'> </input>
    </div>
    <div id="df">
        <h2>Email Address</h2>
        <input placeholder='Full Enter Your Email Address' autocomplete="off"  type='text'></input>
    </div>
    <div id="df">
        <h2>Mobile</h2>
        <input placeholder='Mobile Number'autocomplete="off"  type='number'></input>
    </div>
    <div id="df">
        <h2>Message</h2>
        <input placeholder='Please Enter Your Message' autocomplete="off" type='text'></input>
    </div>
    <div id="ll">
    <button>SUBMIT</button>
    </div>
   
</div>
</div>
</div>

<div id="fot">
<Footer/>
</div>

</>
  )
}

export default SignUp