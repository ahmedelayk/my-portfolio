// Icons
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
// Styling
import "./card.css"
// Image
import cardImg from "../../../assets/card.png"

const CardProject = ({ projectImg, title, projectDetails, skillsUsed, liveUrl, codeUrl }) => {
    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={ projectImg } alt="project" />
                </div>
                <div className="card-content">
                    <h4>{ title }</h4>
                    <p>{ projectDetails }</p>
                    <p><span>skills:</span>{ skillsUsed }</p>
                    <div className="project-links">
                        <a href={ liveUrl } target="_blank" rel="noreferrer" className="live-preview">
                            <AiOutlineLink />
                            <p>Live Preview</p>
                        </a>
                        <a href={ codeUrl } target="_blank" rel="noreferrer" className="github">
                            <AiFillGithub />
                            <p>View Code</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardProject