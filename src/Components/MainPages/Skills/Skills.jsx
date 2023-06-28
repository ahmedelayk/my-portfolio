// Styling
import "./skills.css";
// Images
import htmlImg from "../../../assets/TechSkills/HTML5.png"
import CSS3 from "../../../assets/TechSkills/CSS3.png"
import JS from "../../../assets/TechSkills/JS.png"
import Bootstrap from "../../../assets/TechSkills/Bootstrap.png"
import Sass from "../../../assets/TechSkills/Sass.png"
import tailwindcss from "../../../assets/TechSkills/tailwindcss.png"
import react from "../../../assets/TechSkills/React.png"
import redux from "../../../assets/TechSkills/redux.png"
import Angular from "../../../assets/TechSkills/Angular.png"
import Git from "../../../assets/TechSkills/Git.png"
import Github from "../../../assets/TechSkills/Github.png"
import Figma from "../../../assets/TechSkills/Figma.png"

const Skills = () => {
    return (
        <>
            <section className="skills" id="skills">
                <div className="container">
                    <h3 className="header-text">My Tech Skills</h3>
                    <p className="paragraph-text">Technologies I’ve been working with recently</p>
                    <div className="tech-skills">
                        <div className="tech-image">
                            <img src={htmlImg} alt="html5" />
                            <p>HTML5</p>
                        </div>
                        <div className="tech-image">
                            <img src={CSS3} alt="CSS3" />
                            <p>CSS3</p>
                        </div>
                        <div className="tech-image">
                            <img src={JS} alt="JS" />
                            <p>JavaScript</p>
                        </div>
                        <div className="tech-image">
                            <img src={Bootstrap} alt="Bootstrap" />
                            <p>BootStrap</p>
                        </div>
                        <div className="tech-image">
                            <img src={tailwindcss} alt="tailwindcss" />
                            <p>Tailwindcss</p>
                        </div>
                        <div className="tech-image">
                            <img src={Sass} alt="Sass" />
                            <p>Sass</p>
                        </div>
                        <div className="tech-image">
                            <img src={react} alt="React" />
                            <p>React</p>
                        </div>
                        <div className="tech-image">
                            <img src={redux} alt="redux" />
                            <p>Redux</p>
                        </div>
                        <div className="tech-image">
                            <img src={Angular} alt="Angular" />
                            <p>Angular</p>
                        </div>
                        <div className="tech-image">
                            <img src={Git} alt="Git" />
                            <p>Git</p>
                        </div>
                        <div className="tech-image">
                            <img src={Github} alt="Github" />
                            <p>Github</p>
                        </div>
                        <div className="tech-image">
                            <img src={Figma} alt="Figma" />
                            <p>Figma</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;