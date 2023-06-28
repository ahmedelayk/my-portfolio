import "./contact.css";

const Contact = () => {
  return (
    <>
        <section className="contact" id="contact">
            <div className="container">
                <h4 className="header-text">Let's work together</h4>
                <h6>Mail me:</h6>
                <h4 className="mail">ahmedelayek7@gmail.com</h4>
                <h4>Or</h4>
                <h6>Send me a message</h6>
                <form className="contact-form">
                    <input type="email" name="mail" id="mail" placeholder="Write Your Email" />
                    <textarea name="message" id="message" cols="30" rows="6" placeholder="Write a message for me"></textarea>
                    <input type="submit" value="Send" />
                </form>

            </div>
        </section>
    </>
  )
}

export default Contact