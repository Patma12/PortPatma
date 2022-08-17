import { useState } from 'react';
import './Contact.css'


function Contact() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <div className='contact-flex container-box'>
      <div>
        <h3>let us chat drob me a text</h3>
        <form onSubmit={handleSubmit} className='app__flex'>
          <label>
          <input 
            type="text" 
            name="username" 
            placeholder='Enter your name'
            value={inputs.username || ""} 
            onChange={handleChange}
          />
          </label><br />
          <label>
            <input 
              type="email" 
              name="email" 
              placeholder='Enter your email'
              value={inputs.email || ""} 
              onChange={handleChange}
            />
          </label><br />
          <label>
          <textarea 
              placeholder='Enter your text'
              value={inputs.text|| ""} 
            onChange={handleChange}
          />
          </label><br />
          
          <input type="submit" />

        </form>
      </div >
      <img className="imgq" src="../src/assets/image/contact.png" alt=""  />
      </div>
    )
  }

export default Contact;