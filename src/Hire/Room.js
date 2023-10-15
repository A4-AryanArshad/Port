import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';
import './Room.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Room = () => {
  const{roomId}=useParams();

  const mymetting=async(e)=>{
    const appID = 980078246;
    const serverSecret = "a353a623abdeef6f64e666bcd8193ccc";
    const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),"aryan");
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container:e,
      scenario:{
        mode: ZegoUIKitPrebuilt.VideoConference,
      }
    })
  }
  return (
    <>
    <div id="backgrounder">
<div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
    <div id="nflex"><div ref={mymetting} id="hi"/></div>
    </div>
    <div id="oep">
    <div id="proj">
    <Footer/>
    </div>
    </div>
   </>
  )
}

export default Room