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
    return (
        <>
            <section className="navbar">
                <nav className="container">
                    <div className="logo">Elayek</div>
                    <div className='hamburger' onClick={ handleClick }>
                        { click ? (<FaTimes size={ 30 } style={ { color: '#121212' } } />) : (<FaBars size={ 30 } style={ { color: '#121212' } } />) }
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><a href="#home">Home</a></li>
                        <li className='nav-item'><a href="#about">About</a></li>
                        <li className='nav-item'><a href="#Skills">Skills</a></li>
                        <li className='nav-item'><a href="#projrcts">Projects</a></li>
                        <li className='nav-item'><a href="#contactus">Contact Us</a></li>
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