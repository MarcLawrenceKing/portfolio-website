import "../styles/AboutMe.css";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me-section">
      <div className="about-me-page-title-container">
        <p className="about-me-page-title">About Me</p>
      </div>

      <div className="about-me-cards-container">
        <AboutMeCard title={"Introduction"}>
          <p>
            Hi, I'm Marc, a passionate Web Developer with a love for front-end
            development.
            <br /> <br /> I enjoy solving challenges and creating innovative
            solutions.
          </p>
        </AboutMeCard>
        <AboutMeCard title={"Education"}>
          <p>
            I am taking my Bachelor of Science in Information Technology from @
            Polytechnic University of the Philippines - Manila. <br /> <br /> My
            academic journey has equipped me with strong foundations in software
            development, data science, and cybersecurity.
          </p>
        </AboutMeCard>
        <AboutMeCard title={"Hobbies"}>
          <p>
            When I'm not working, I love playing chess and the guitar, which
            keep me inspired and energized.
          </p>
        </AboutMeCard>
      </div>
    </div>
  );
};

export default AboutMe;
