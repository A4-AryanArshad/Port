import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ProjectType = () => {
    const{type}=useParams();
 
    const [set, setset] = useState('')
    const [data, setdata] = useState([])

    const callAbout=async()=>{
  
      try {
        console.log(    'kkkkkkkkkkk');
         const res=await fetch('/allprojectsdata',{
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
<div id="ubord">

{
 data.map((e)=>{

if(e.addinlist==type){

return(
  <>
<div id="uboard">
<div id="bord">
 <div id="op">
<div id="ss">
<div id="upperr1">
    <h2>{e.name}</h2>
    <p>{e.link}</p>
    <p> {e.description}</p>
  </div>
<div id="mypic">
    <img src={`../${e.img}`}></img>
</div>
</div>
</div>
</div>
</div>




  
  </>
)
}
  })

}

</div>


<div id="oep">
<div id="proj">
<Footer/>
</div>
</div>


</>   
  )
}

export default ProjectType