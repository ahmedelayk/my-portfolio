// Styling
import "./footer.css";

const Footer = () => {
  return (
    <>
        <section className="footer" id="footer">
            <div className="container">
                <p>Designed by <span>Ahmed Elayek</span> with <span>Love</span> <span>❤</span> • Copyrights <span>🅒</span> {new Date().getFullYear()}</p>
            </div>
        </section>
    </>
  )
}

export default Footer;