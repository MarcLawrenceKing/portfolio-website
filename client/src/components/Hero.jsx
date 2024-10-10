import "../styles/Hero.css";
import Button from "./Button";
import Image from "./Image";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href =
      "https://www.canva.com/design/DAGTJNTlXbM/G37zun6D4B09cUu83ERMlQ/edit?utm_content=DAGTJNTlXbM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"; // Replace with your PDF file path
    link.target = "_blank";
    link.click(); // Trigger the download
  };

  return (
    <div className="hero" id="hero-section">
      <div className="hero-section-left">
        <h1>
          Hello! I am <br />
          <span id="my-name">Marc Lawrence</span>, <br />a{" "}
          <span id="my-job-desc">Frontend Developer</span>.
        </h1>

        <h2>
          Motivated IT student with a background in front-end web development,
          data science, and cybersecurity!
        </h2>

        <div className="profile-section">
          <a href="https://www.facebook.com/marclawrence.king" target="_blank">
            <FaFacebook size={"80px"} color={"#2e2c2f"} />
          </a>
          <a
            href="https://www.linkedin.com/in/marc-lawrence-king-0721a6261/"
            target="_blank"
          >
            <FaLinkedin size={"85px"} color={"#2e2c2f"} />
          </a>
          <a href="https://github.com/MarcLawrenceKing" target="_blank">
            <FaGithub size={"80px"} color={"#2e2c2f"} />
          </a>
          <a href="mailto:marclawrenceking@gmail.com" target="_blank">
            <FaGoogle size={"80px"} color={"#2e2c2f"} />
          </a>
        </div>

        <Button variant={"download-btn"} onClick={downloadPDF}>
          Download CV
        </Button>
      </div>
      <div className="hero-section-right">
        <div className="hero-img-container">
          <Image variant={"hero-image"} imageKey={"imageMarc"}></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
