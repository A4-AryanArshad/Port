import React, { useEffect,useState } from 'react'

import '../Projects/Projects.css'

const Expe = () => {
 
     const [set, setset] = useState('')
     const [data, setdata] = useState([])
    
    
     const callAbout=async()=>{
      
      try {
   
         const res=await fetch('/allexperience',{
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
{
 data.map((e)=>{
return(
  <>

<div id="uboard">
<div id="bord">
  <div id="upperr1">
    <h2 >{e.Role}</h2>
    <p> {e.Description}</p>
  </div>
  <div id="imag">
    <img src={e.img}></img>
    <h3>{e.CompanyName}</h3>
  </div>
</div>
</div>
  


  </>
)
  })
}





</>
  )
}

export default Expe