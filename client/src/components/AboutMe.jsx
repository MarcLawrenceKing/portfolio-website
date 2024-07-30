import "../styles/AboutMe.css"
import AboutMeCard from "./AboutMeCard";

const AboutMe = () =>{
  return(
    <div className="about-me" id="about-me-section">
    <p className="page-title">About Me</p>

      <div className="about-me-cards-container">
        <AboutMeCard></AboutMeCard>
        <AboutMeCard>Education</AboutMeCard>
        <AboutMeCard>Hobbies</AboutMeCard>

        
      </div>    
    </div>
  );
};

export default AboutMe;