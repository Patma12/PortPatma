import './Profile.css'
import patma from "../../assets/image/patma.png"
import github from "../../assets/image/github.svg"

function Profile() {
    return (
        <div>
            
            <div className='profile-grid '>
                <div className='profile-in'>
                    <h1>Hello! I'm <span className='orange'>Patma Mataa</span><br />
                    I'm a full-stack web developer</h1>
                    <p className='p'>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Because coding is like magic, it makes we can communicate with each other around the world. Nowadays, technology plays an important role in our lives. So I started to learn these skills every single day. I felt love and excited about it all the time. Now looking for work with an entry-level software developer with your organization to walk forward together. I am confident that my experience working in the position of services over the past four years has been combined with my technical skill. I have learned and gotten from Software Developer Bootcamp by Generation Thailand taught me technical skills like the MERN stack, virtual works roleplay and soft skills like design thinking, agile, scrum process, etc. These will be tools to help us move forward and make new things happen. </p>
                    {/* <p>“Life without knowledge is death in disguise.”  - Talib Kweli</p> */}
                    {/* <a href=''><button className='fa-button'>get resume</button></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="https://www.linkedin.com/in/patma-mataa-287672248/" className="fa fa-linkedin"></a>
                    <a href="https://github.com/Patma12" className="fa fa-github"></a> */}
                </div>
                <div className=''>
                    <img className='profile-image' src={patma}  alt="profile-image" />
                </div>
                <img />
                
            </div>
        </div>
    )
} 

export default Profile;
