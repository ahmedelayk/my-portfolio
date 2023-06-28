// Hooks
import { useRef, useState } from 'react';
// Styling
import "./contact.css";
// emailjs lib.
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
    const form = useRef();
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (mail && message) {
            emailjs.sendForm('service_nmo8fmg', 'template_0xbi3pa', form.current, 'h8sbkyHvTNBnIjwMy')
                .then((result) => {
                    // console.log(result.text);
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thank you for messaging me.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }, (error) => {
                    // console.log(error.text);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Check your Email'
                      })
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
                    {/* <h4>Or</h4> */ }
                    <h6>Call me</h6>
                    <h4 className="mail">+201210898966</h4>
                    {/* <h4>Or</h4> */ }
                    <h6>Send me a message</h6>
                    <form className="contact-form" onSubmit={ sendEmail } ref={ form }>
                        <input type="email" name="mail" id="mail" placeholder="Write Your Email" onChange={ (e) => setMail(e.target.value) } />
                        <textarea name="message" id="message" cols="30" rows="6" placeholder="Write a message for me" onChange={ (e) => setMessage(e.target.value) }></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact;




export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={ form } onSubmit={ sendEmail }>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};