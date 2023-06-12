import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Navbar() {
    return (
        <>
            <div className="shadow">
                <div className="container mx-auto p-4 flex justify-between">
                    <div className="logo">
                        <h1 className="text-dark font-bold text-3xl">Elayek</h1>
                    </div>
                    <div className="sections flex items-center">
                        <ul className="list-none flex justify-center items-center gap-12 text-lg text-bold">
                            <li><a href="#home" className='font-bold text-main'>Home</a></li>
                            <li><a href="#about" className='font-medium'>About</a></li>
                            <li><a href="#skills" className='font-medium'>Skills</a></li>
                            <li><a href="#projects" className='font-medium'>Projects</a></li>
                            <li><a href="#contact-me" className='font-medium'>Contact</a></li>
                        </ul>
                    </div>
                    <div className="websites flex gap-4 items-center">
                        <a href="https://www.github.com/ahmedelayk">
                            <AiFillGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/ahmed-elayek/">
                            <AiFillLinkedin />
                        </a>
                        {/* <div className='flex items-center'>
                            <input type="checkbox" name="darkMode" id="darkMode" className='mr-1' />
                            <label htmlFor="darkMode">dark mode</label>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}
