// Styling
import "./about.css";

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="about-me">
                        <h3 className="header-text">About Me</h3>
                        <p className="paragraph-text">Highly motivated and energetic frontend developer, enthusiastic about learning more and actively seeking
                            opportunities to gain practical experience and expand my knowledge in frontend technologies.</p>
                    </div>
                    <div className="education">
                        <h3 className="header-text">Education</h3>
                        <div className="college">
                            <h4 className="college-text">Soubra Faculty Of Engineering, Benha University, <span>Bachelor’s degree</span></h4>
                            <p className="date">Sep 2016 - Jul 2021</p>
                        </div>
                        <p className="major">Major: Computer Engineering</p>
                        <p className="grade">Grade: Very Good</p>
                    </div>
                    <div className="education">
                        <h3 className="header-text">Internships</h3>
                        <div className="college">
                            <h4 className="college-text">Information Technology Institute ( ITI ) - Intensive Code Camp</h4>
                            <p className="date">Mar 2023 - Jul 2023</p>
                        </div>
                        <p className="major">Frontend and cross platform mobile development</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;