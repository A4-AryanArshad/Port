import logo from './logo.svg';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import './App.css';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Cv from "./Cv/Cv"
import Contact from "./Contact/Contact"
import Footer from './Footer/Footer';
import SignUp from './Hire/SignUp';
import Login from "./Hire/Login"
import Room from './Hire/Room';
import Chatlogin from './Chat/Chatlogin';
import ChatPage from './Chat/ChatPage';
import Pannel from './Pannel/Pannel';
import AddP from './Pannel/AddP';
import ProjectType from './ProjectType/ProjectType';
import HireMe from './HireMe/HireMe';
import ClientPannel from './ClientPannel/ClientPannel';


function App() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1, backgroundColor: 'black' }}>
    <Router>
   
   
<Routes>
 
    <Route path="/" element={<Home/>}/> 

    <Route path="/Cv" element={<Cv/>}/> 
    <Route path="/Contact" element={<Contact/>}/> 
    <Route path="/SignUp" element={<SignUp/>}/> 
    <Route path="/Login" element={<Login/>}/> 
    <Route path="/Room/:roomId" element={<Room/>}/> 
    <Route path="/Chat" element={<Chatlogin/>}/> 
    <Route path="/ChatPage/:room" element={<ChatPage/>}/> 
    <Route path="/Projects/:type" element={<ProjectType/>}/> 
    <Route path="/pannel" element={<Pannel/>}/> 
    <Route path="/AddP" element={<AddP/>}/> 
    <Route path="/Hire" element={<HireMe/>}/> 
    <Route path="/Cpannel" element={<ClientPannel/>}/> 
    


</Routes>

  

</Router>
</div>
</div>
</>
  );
}

export default App;

