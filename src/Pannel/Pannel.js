import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Pannel.css';
import AddP from './AddP';
import DelP from './DelP';
import AddE from './AddE';
import DelE from './DelE';
import AddH from './AddH';
import AddT from './AddT';
import DelT from './DelT';
import Cv from './Cv';
import DelCv from './DelCv';
const Pannel = () => {
 
    const [seleter, setseleter] = useState('')
  return (
   <>
   <div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
   
   <div id="sider">
    <div id="qop">
<button onClick={(e)=>setseleter("addp")}>Add Project</button>

<button onClick={(e)=>setseleter("delp")}>Delete project</button>
<button onClick={(e)=>setseleter("adde")}>Add Job experience</button>
<button onClick={(e)=>setseleter("dele")}>Delete Job experience</button>
<button onClick={(e)=>setseleter("main")}>Main Page Title</button>
<button onClick={(e)=>setseleter("tec")}>Add Technology</button>
<button onClick={(e)=>setseleter("delt")}>Delete Technology</button>
<button onClick={(e)=>setseleter("cv")}>Add Cv</button>
<button onClick={(e)=>setseleter("delcv")}>Delete Cv</button>

    </div>
  {seleter=="addp"?<AddP/>:console.log(".")}
  {seleter=="delp"? <DelP/>:console.log(".")}
  {seleter=="adde"? <AddE/>:console.log(".")}
  {seleter=="dele"? <DelE/>:console.log(".")}
  {seleter=="main"? <AddH/>:console.log(".")}
  {seleter=="tec"? <AddT/>:console.log(".")}
  {seleter=="delt"?   <DelT/>:console.log(".")}
  {seleter=="cv"?     <Cv/>:console.log(".")}
  {seleter=="delcv"?     <DelCv/>:console.log(".")}
  



 
   </div>
   


<div id="oep">
<div id="proj">
<Footer/>

</div>
</div>
   </>
  )
}

export default Pannel