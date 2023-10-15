import React from 'react'
import './Navbar.css';
import { BsFillPersonFill,BsFilterSquareFill ,BsBookmarkStarFill,BsFillChatSquareHeartFill,BsFillEnvelopeFill,BsFileTextFill,BsQuestionDiamond,BsFillQuestionSquareFill} from "react-icons/bs";
import { Link } from 'react-router-dom';
const Front = () => {
  return (
<>
<div id="utotalar">
<div id="totalar">
<div id="first">
  <div id="namer">
  <h1>DevFusion Club</h1>
  </div>
  <div id="second">
  <div id="Innerfirst">
  < BsFillPersonFill id="setter"/>
    <Link to={"/"} id="link"><h3>About</h3></Link> 

  </div>



 
  <div id="Innerfirst">
    <BsFillQuestionSquareFill id="setter"/>
    
    <Link to={"/Contact"} id="link"><h3>Why To Hire Us</h3></Link> 
  </div>
  <div id="Innerfirst">
    <BsFillEnvelopeFill id="setter"/>
    <Link to={"/Hire"} id="link"><h3>HireMe</h3></Link> 
  </div>
  </div>
</div>
</div>
</div>

</>
  )
}

export default Front