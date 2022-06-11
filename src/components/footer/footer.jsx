import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
    return (
        <div id="footer" className="container footer-container">
            <h1>
                That's all
                <a href="#home">
                    <h2>
                        <BsMouse /> - scroll up -
                    </h2>
                </a>
            </h1>
            <div className="social-links">
                <a href="https://www.linkedin.com/in/clint-maruti/">
                    <TiSocialLinkedin className="social" />
                </a>
                <a href="https://github.com/ClintPy">
                    <TiSocialGithub className="social" />
                </a>
                <a href="https://web.whatsapp.com/">
                    <AiOutlineWhatsApp className="social" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
