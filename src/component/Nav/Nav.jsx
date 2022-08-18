import React from 'react'
import './Nav.css'
import Expereince from '../Expereince/Expereince';


function Nav() {
  return (
    <nav>
        <ul className="topnav">
            <li><a href="#home">Home</a></li>
            <li><a href="#Ability">Ability</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Experince">Experince</a></li>
            <a href=''><button className='fa-button'>Resume</button></a>
            <a href="#" className="fa fa-facebook"></a>
            <a href="https://www.linkedin.com/in/patma-mataa-287672248/" className="fa fa-linkedin"></a>
            <a href="https://github.com/Patma12" className="fa fa-github"></a>
            
           
            
        </ul>
    </nav>
  
  )
}

export default Nav;