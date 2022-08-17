import './Profile.css'

function Profile() {
    return (
        <div>
            
            <div className='profile-grid '>
                <div className='profile-in'>
                    <h1>Hello! I'm <span className='orange'>Patma Mataa</span><br />
                    I'm a full-stack web developer.👑</h1>
                    <p>I'm a tech geek specializing in building (and occasionally designing) exceptional digital experiences. </p>
                    <p>“Life without knowledge is death in disguise.”  - Talib Kweli</p>
                    <a href=''><button className='fa-button'>get resume</button></a><a href="#" class="fa fa-facebook"></a><a href="https://www.linkedin.com/in/patma-mataa-287672248/" class="fa fa-linkedin"></a>
                </div>
                <div className=''>
                    <img className='profile-image' src="../src/assets/image/patma.png"  alt="profile-image" />
                </div>
                <img />
                
            </div>
        </div>
    )
} 

export default Profile;
