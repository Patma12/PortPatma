import './Project.css'
import jamming from "../../assets/image/jamming.png"
import github from "../../assets/image/github.svg"
import demoicon from '../../assets/image/demoicon.png'


function Project() {
    return (
        <div className=''>
            <h2> ABOUT MY ℙℝ𝕆𝕁𝔼ℂ𝕋</h2><br />
            <div className='list-card'>
                
                <div className="card">
                    <img className="card-image" src={jamming} alt="John" height="220px" />
                    <h3>Jammming</h3>
                    <p>A website for users to create playlists in Spotify by searching music and adding to a new playlist. By using React, NPM, Surge, and Spotify API.</p>
                    <p><a href="https://github.com/Patma12/jsd-jammming-assessment-class" ><button><img clasName="image-icon" src={github} /></button></a> <a href="https://jammingpatma.surge.sh/"><button><img src={demoicon} /></button></a></p>
                </div>  

                <div className="card">
                    <img className="card-image" src={jamming} alt="John" height="220px" />
                    <h3>Jammming</h3>
                    <p>A website for users to create playlists in Spotify by searching music and adding to a new playlist. By using React, NPM, Surge, and Spotify API.</p>
                    <p><a href="https://jammingpatma.surge.sh/" ><button><img clasName="image-icon" src={github} /></button></a><button><img src={demoicon} /></button></p>
                </div>   

                
            </div>          
        </div>
    )
}

export default Project;