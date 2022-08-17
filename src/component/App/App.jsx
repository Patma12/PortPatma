import { useState } from 'react'

import './App.css'
import Profile from '../Profile/Profile';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import Expereinces from '../Expereince/Expereince';
import Project from '../Project/Project';
import Nav from '../Nav/Nav';



function App() {
  
  return (
    <div className="App">
      <Nav />
      
        <Profile /> 
        <hr /><br />

        <Skill />
        <br /><br />
        
        <Project /> 
        <br /><br />

       
        
        <Expereinces />
        {/* <br /><br />
        <Contact /> */}
    </div>  )
      
     
}

export default App;
