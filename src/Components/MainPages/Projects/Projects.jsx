// Styling
import "./projects.css";
// Components
import CardProject from "./CardProject";
// Images
import proj1 from "../../../assets/card.png"
import proj2 from "../../../assets/Personal_Img.jpeg"

const Projects = () => {
    return (
        <>
            <section className="projects" id="projects">
                <div className="container">
                    <h3 className="header-text">Projects</h3>
                    <p className="paragraph-text">Things I’ve built so far</p>
                    <div className="project-cards">
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={proj1} title={"test1"} projectDetails={"trending movies using TMDB"} skillsUsed={"html,css,js,react and redux"} liveUrl={"https://www.w3schools.com/cssref/pr_font_font-style.php"} codeUrl={"https://www.google.com/search?q=github&rlz=1C1SQJL_enEG1047EG1047&oq=github&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDIwNTlqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8"}/>
                        </div>

                        {/* <div className="project-card">
                            <CardProject projectImg={} title={} projectDetails={} skillsUsed={} liveUrl={} codeUrl={}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={} title={} projectDetails={} skillsUsed={} liveUrl={} codeUrl={}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={} title={} projectDetails={} skillsUsed={} liveUrl={} codeUrl={}/>
                        </div>
                        <div className="project-card">
                            <CardProject projectImg={} title={} projectDetails={} skillsUsed={} liveUrl={} codeUrl={}/>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects