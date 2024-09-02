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
        <Button variant={"send-message-btn"}>Send a message</Button>
      </div>

      <div className="connect-with-me-container">
        <p className="footer-text" id="connect-with-me">
          Connect with me!
        </p>
        <div className="footer-profile-section">
          <FaFacebook size={"50px"} color={"#2e2c2f"} />
          <FaLinkedin size={"55px"} color={"#2e2c2f"} />
          <FaGithub size={"50px"} color={"#2e2c2f"} />
          <FaGoogle size={"50px"} color={"#2e2c2f"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
