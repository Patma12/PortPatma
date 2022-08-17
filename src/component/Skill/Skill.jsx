import './Skill.css'
import html from '../../assets/image/html.png'

function Skill() {
    return (
        <div className='skill-box'>
            <h2 className='container-box '>WHAT ABILITIES I CAN OFFER</h2>
            <div className='skill container-box '>
                <img src={html} alt='html' />
                {/* <img src="../src/assets/image/css.png" alt='css' />
                <img src="../src/assets/image/javascript.png" alt='javascript' />
                <img src="../src/assets/image/react.png" alt='react' />
                <img src="../src/assets/image/nodejs.png" alt='nodejs' />
                <img src="../src/assets/image/expressjs.png" alt='expressjs' />
                <img src="../src/assets/image/python.png" alt='python' />
                <img src="../src/assets/image/mongodb.png" alt='mongodb' />
                 */}
            </div>
        </div>
    )
}

export default Skill;