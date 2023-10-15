import React from 'react'
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { BsLinkedin,BsFillEnvelopeFill,BsGithub ,BsTwitter,BsWhatsapp,BsGit,BsInstagram} from "react-icons/bs";
import { DiReact,DiJsBadge,DiNodejs,DiMongodb,DiNpm,DiSass,DiWordpress,DiVisualstudio,DiCss3,DiGitBranch,DiGithubBadge,DiHtml5 } from "react-icons/di";
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Expe from '../Expe/Expe';
const Home = () => {
  return (
<>
<div id="ppe">
<div id="homer">
    <div id="nn">
<Navbar/>
</div>
</div>
<div id="tota">
<div id="imager1">
    <img src="/profile.webp"></img>

    </div>

<div id="other">
    <div id="para1">
        <h2>Unleashing Innovation</h2>
        <p>Software Engineer, Designer & Product Generalist</p>
        <p>At DevFusion Club, we are passionate about delivering excellence in every digital endeavor. Our mission is to transform your vision into reality, leveraging the power of innovation, technology, and creativity. With a dedicated team of experts, we have been serving clients worldwide, providing tailored solutions that drive growth and success.
</p>
<h3>Connect with me :</h3>
<div id="iconeer">
<BsLinkedin id="aryant"   style={{fontSize:"39px"}}/>
<BsFillEnvelopeFill id="llk" style={{fontSize:"39px"}}/>
<BsGithub id="llk"  style={{fontSize:"39px"}}/>
<BsTwitter id="llk"  style={{fontSize:"39px"}}/>
<BsWhatsapp id="llk"  style={{fontSize:"39px"}}/>
<BsInstagram id="llk"  style={{fontSize:"39px"}}/>
<BsGit id="llk"  style={{fontSize:"39px"}}/>
</div>
</div>
<div id="imager">
<img src="/profile.webp"></img>

    </div>
</div>

<div id="totalskills">
<div id="skillss">
    <h2>Skills</h2>
    <p>we excel in web development. Our team is proficient in the latest technologies, creating visually captivating and highly functional websites. We specialize in HTML5, CSS3, JavaScript, React, NextJs and more, ensuring security, speed, and a seamless user experience. Partner with us for expert web solutions that exceed your expectations.</p>
  
</div>
<div id="ciconer">
<div id="iconer">
    <DiReact id="llk"/>
<DiJsBadge id="llk"/>
<DiNodejs id="llk"/>
<DiMongodb id="llk"/>
<DiNpm id="llk"/>
<DiSass id="llk"/>
</div>
<div id="iconer">
    <DiWordpress id="llk"/>
<DiVisualstudio id="llk"/>
<DiCss3 id="llk"/>
<DiGitBranch id="llk"/>
<DiGithubBadge id="llk"/>
<DiHtml5 id="llk"/>
</div>
</div>

  </div>
<div id="proj">
<Projects/>
</div>
<div id="proj">
<Expe/>
</div>
</div>
<div id="oept">
<div id="projet">
<Footer/>
</div>
</div>
</div>
</>
  )
}

export default Home