import React from 'react'
import './Nav.css'
import Expereince from '../Expereince/Expereince';


function Nav() {
  return (
    <nav>
        <ul className="topnav">
            <li><a href="#home">Home</a></li>
            <li><a href="#skill">Ability</a></li>
            <li><a href="#expereince">Education</a></li>
            <li><a href="#expereince">Experince</a></li>
            <li><a href="#project">Project</a></li>
            <a href='https://drive.google.com/file/d/1CMwvN1I3xIf2rjsgWocX8G1tY6Gtkwht/view?usp=sharing'><button className='fa-button'>Resume</button></a>
            <a href="#" className="fa fa-facebook"></a>
            <a href="https://www.linkedin.com/in/patma-mataa-287672248/" className="fa fa-linkedin"></a>
            <a href="https://github.com/Patma12" className="fa fa-github"></a>
        </ul>
    </nav>
  
  )
}

export default Nav;