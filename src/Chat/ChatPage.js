import React from 'react'
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './ChatPage.css';
import { AiOutlineSend } from "react-icons/ai";


const ChatPage = () => {
    const styles = {
      display:"none"
      };
  return (
   <>
   <div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
<div d="totr">
<div id="ar" style={styles}>
    <h2>ask me anything</h2>
    <p>This is an Auto Chat Generator Here You Can Search About Any Thing As You Want </p>
</div>
<div id="fg">
<div id="jj11">
    <div id="jj1">
    <p>What is the amount of react </p>
    </div>
    </div>
    <div id="jj2">
    <p>What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount  What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount  What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount of react What is the amount </p>
    </div>

</div>

<div id="texter">
    <input type='text' placeholder='Write What You Want ....'/>
    <AiOutlineSend id="jkl"/>
    
</div>
</div>
<div id="oep">
<div id="projy">
<Footer/>
</div>
</div>
   </>
  )
}

export default ChatPage