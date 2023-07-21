// Hooks
import { useEffect, useRef, useState } from 'react';
// Styling
import "./contact.css";
// emailjs lib.
import emailjs from '@emailjs/browser';
// import Swal from 'sweetalert2';
// Component
import Popup from './Popup';


const Contact = () => {
    const form = useRef();
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [showPopup, SetShowPopup] = useState(false);
    const [isError, SetIsError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (mail && message) {
            emailjs.sendForm('service_nmo8fmg', 'template_0xbi3pa', form.current, 'h8sbkyHvTNBnIjwMy')
                .then((result) => {
                    SetIsError(false);
                    SetShowPopup(true);
                    console.log("done")
                    // console.log(result.text);
                }, (error) => {
                    console.log("error")
                    SetIsError(true);
                    SetShowPopup(true);
                });
        }
    };
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <h4 className="header-text">Let's work together</h4>
                    <h6>Mail me</h6>
                    <h4 className="mail">ahmedelayek7@gmail.com</h4>
                    <h6>Call me</h6>
                    <h4 className="mail">+201210898966</h4>
                    <h6>Send me a message</h6>
                    <form className="contact-form" onSubmit={ sendEmail } ref={ form }>
                        <input type="email" name="mail" id="mail" placeholder="Write Your Email" onChange={ (e) => setMail(e.target.value) } />
                        <textarea name="message" id="message" cols="30" rows="6" placeholder="Write a message for me" onChange={ (e) => setMessage(e.target.value) }></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
                    {
                        showPopup && <Popup showPopup={showPopup} SetShowPopup={SetShowPopup} isError={isError}/>
                    }
            </section>
        </>
    )
}

export default Contact;
