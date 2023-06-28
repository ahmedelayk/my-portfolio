// Image
import personalImg from "../../../assets/Personal_.jpg";
// Styling
import "./header.css"

const Header = () => {
    return (
        <>
            <section id="home" className="home">
                <header className="container">
                    <div className="welcome-text">
                        <h3>Hello, I'm</h3>
                        <h3>Ahmed Elayek</h3>
                        <h3>Frontend Developer</h3>
                    </div>
                    <div className="image">
                        <img src={ personalImg } alt="ahmed" />
                    </div>
                </header>
            </section>
        </>
    )
}

export default Header;