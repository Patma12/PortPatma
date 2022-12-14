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
      
      <section id="home">
        <Profile /> 
        <hr /><br />
        </section>
        <section id='skill'>
        <Skill />
        <br /><br />
        </section>
        
        <section id='expereince'>
        <Expereinces />
        </section>

        <section id='project'>
        <Project /> 
        <br /><br />
        </section> 
        
    </div>  )
      
     
}

export default App;
