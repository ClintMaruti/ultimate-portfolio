import "./contact.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

function Contact() {
    return (
        <div id="contact" className="container contact-container">
            <h1>contact me</h1>
            <div className="contact-links">
                <a href="https://www.linkedin.com/in/clint-maruti/" className="contact linkedin">
                    <AiOutlineLinkedin className="icon" />
                    <h2>
                        linkedin <span>Clint M.</span>
                    </h2>
                </a>
                <a href="https://web.whatsapp.com/" className="contact whatsapp">
                    <AiOutlineWhatsApp className="icon" />
                    <h2>
                        whatsapp <span>+254 796475102</span>
                    </h2>
                </a>
                <a href="https://github.com/ClintPy" className="contact github">
                    <AiOutlineGithub className="icon" />
                    <h2>
                        github <span>ClintPy</span>
                    </h2>
                </a>
            </div>
        </div>
    );
}

export default Contact;
