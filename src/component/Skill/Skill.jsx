import './Skill.css'
import html from '../../assets/image/html.png'
import css from "../../assets/image/css.png"
import javascript from "../../assets/image/javascript.png"
import react from "../../assets/image/react.png" 
import nodejs from "../../assets/image/nodejs.png" 
import expressjs from "../../assets/image/expressjs.png"
import python from "../../assets/image/python.png"
import mongodb from "../../assets/image/mongodb.png"

function Skill() {
    return (
        <div className='skill-box'>
            <h2 className='container-box '>WHAT ABILITIES</h2>
            <div className='skill container-box '>
                <img src={html} alt='html' />
                <img src={css} alt='css' />
                <img src={javascript} alt='javascript' />
                <img src={react} alt='react' />
                <img src={nodejs} alt='nodejs' />
                <img src={expressjs} alt='expressjs' />
                <img src={python} alt='python' />
                <img src={mongodb} alt='mongodb' />
                
            </div>
        </div>
    )
}

export default Skill;