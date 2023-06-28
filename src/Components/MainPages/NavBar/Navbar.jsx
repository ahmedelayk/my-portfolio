// Icons
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import {FaBars, FaTimes} from "react-icons/fa"
// Styling
import "./navbar.css";
import { useState } from 'react';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    const [homeOffset, setHomeOffset] = useState(false)
    const [aboutOffset, setAboutOffset] = useState(false)
    const [skillsOffset, setSkillsOffset] = useState(false)
    const [projectsOffset, setProjectsOffset] = useState(false)
    const [contactOffset, setContactOffset] = useState(false)

    const home = document.getElementById("home");
    const about = document.getElementById("about");
    const skills = document.getElementById("skills");
    const projects = document.getElementById("projects");
    const contact = document.getElementById("contact");
    window.onscroll = () => {
        (window.scrollY >= home.offsetTop && window.scrollY < home.offsetTop + home.offsetHeight)?setHomeOffset(true): setHomeOffset(false);
        (window.scrollY >= about.offsetTop && window.scrollY < about.offsetTop + about.offsetHeight)?setAboutOffset(true): setAboutOffset(false);
        (window.scrollY >= skills.offsetTop && window.scrollY < skills.offsetTop + skills.offsetHeight)?setSkillsOffset(true): setSkillsOffset(false);
        (window.scrollY >= projects.offsetTop && window.scrollY < projects.offsetTop + projects.offsetHeight -1)?setProjectsOffset(true): setProjectsOffset(false);
        (window.scrollY >= contact.offsetTop -1 && window.scrollY < contact.offsetTop + contact.offsetHeight)?setContactOffset(true): setContactOffset(false);
    }
    return (
        <>
            <section className="navbar">
                <nav className="container">
                    <div className="logo">Elayek</div>
                    <div className='hamburger' onClick={ handleClick }>
                        { click ? (<FaTimes size={ 30 } style={ { color: '#121212' } } />) : (<FaBars size={ 30 } style={ { color: '#121212' } } />) }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><a className={homeOffset?"nav-active": ""} href="#home">Home</a></li>
                        <li className='nav-item'><a className={aboutOffset?"nav-active": ""} href="#about">About</a></li>
                        <li className='nav-item'><a className={skillsOffset?"nav-active": ""} href="#skills">Skills</a></li>
                        <li className='nav-item'><a className={projectsOffset?"nav-active": ""} href="#projects">Projects</a></li>
                        <li className='nav-item'><a className={contactOffset?"nav-active": ""} href="#contact">Contact</a></li>
                    </ul>
                    <ul className="social-links">
                        <li><a href="https://www.linkedin.com/in/ahmed-elayek/" target="_blank" rel="noreferrer"><AiFillLinkedin /></a></li>
                        <li><a href="https://github.com/ahmedelayk" target="_blank" rel="noreferrer"><AiFillGithub /></a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Navbar;