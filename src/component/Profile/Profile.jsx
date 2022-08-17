import './Profile.css'
import patma from "../../assets/image/patma.png"
import github from "../../assets/image/github.svg"

function Profile() {
    return (
        <div>
            
            <div className='profile-grid '>
                <div className='profile-in'>
                    <h1>Hello! I'm <span className='orange'>Patma Mataa</span><br />
                    I'm a full-stack web developer.👑</h1>
                    <p>I'm a tech geek specializing in building (and occasionally designing) exceptional digital experiences. </p>
                    <p>“Life without knowledge is death in disguise.”  - Talib Kweli</p>
                    <a href=''><button className='fa-button'>get resume</button></a>
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="https://www.linkedin.com/in/patma-mataa-287672248/" className="fa fa-linkedin"></a>
                    <a href="https://github.com/Patma12" className="fa fa-github"></a>
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
