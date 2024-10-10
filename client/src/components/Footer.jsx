import "../styles/Footer.css";
import Button from "./Button";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="lets-talk-container">
        <p className="footer-text" id="lets-talk">
          Let's talk
        </p>
        <a href="mailto:marclawrenceking@gmail.com" target="_blank">
          <Button variant={"send-message-btn"}>Send a message</Button>
        </a>
      </div>

      <div className="connect-with-me-container">
        <p className="footer-text" id="connect-with-me">
          Connect with me!
        </p>
        <div className="footer-profile-section">
          <a href="https://www.facebook.com/marclawrence.king" target="_blank">
            <FaFacebook size={"50px"} color={"#2e2c2f"} />
          </a>
          <a
            href="https://www.linkedin.com/in/marc-lawrence-king-0721a6261/"
            target="_blank"
          >
            <FaLinkedin size={"55px"} color={"#2e2c2f"} />
          </a>
          <a href="https://github.com/MarcLawrenceKing" target="_blank">
            <FaGithub size={"50px"} color={"#2e2c2f"} />
          </a>
          <a href="mailto:marclawrenceking@gmail.com" target="_blank">
            <FaGoogle size={"50px"} color={"#2e2c2f"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
