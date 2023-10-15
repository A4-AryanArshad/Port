import React, { useEffect,useState } from 'react'
import './Cv.css';
import Navbar from '../Navbar/Navbar';
import { BsDownload } from "react-icons/bs";
import Footer from '../Footer/Footer';
const Cv = () => {
  const [data, setdata] = useState('')
  const callAbout=async()=>{
  
    try {
      console.log(    'kkkkkkkkkkk');
       const res=await fetch('/allcv',{
          method:"GET",
          headers:{
             Accept:"application/json",
             "Content-Type":"application/json"
          },
          credentials:"include"
       });
       const dat=await res.json();
       console.log(dat);
       setdata(dat)
       console.log(data);
   
    
     
   
  
    
    } catch (error) {
       console.log(error);
    }
  }
  
  
    useEffect(() => {
      callAbout();
  
    },[])
  return (
<>
<div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
<div id="cvv">
    <h2>Resume/Cv</h2>
    <div id="downloader">
        <BsDownload id="down"/>
        <h3>Download</h3>
    </div>
    
</div>
<div id="ucivier">
<div id="civier">

 { data?<img src={`../${data.img}`}></img>:""}
</div>
</div>
<div id="kl">
<Footer/>
</div>
</>
  )
}

export default Cv