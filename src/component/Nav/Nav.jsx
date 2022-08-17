import React from 'react'
import './Nav.css'
import Expereince from '../Expereince/Expereince';


function Nav() {
  return (
    <nav>
        <ul className="topnav">
            <li><a href="#home">Home</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#Experince">Experince</a></li>
            
        </ul>
    </nav>
  
  )
}

export default Nav;