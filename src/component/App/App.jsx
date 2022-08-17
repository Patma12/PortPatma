import { useState } from 'react'

import './App.css'
import Profile from '../Profile/Profile';
import Education from '../Education/Education';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import { Expereince } from '../Expereince/Expereince';
import Project from '../Project/Project';



function App() {
  
  return (
    <div className="App">

          {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="blogs" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </BrowserRouter> */}
      
        <Profile /> 
        <hr /><br />
        
        <Project /> 
        <br /><br />

        <Skill />
        <br /><br />
        
        <Expereince />
        {/* <br /><br />
        <Contact /> */}
    </div>  )
      
     
}

export default App;
