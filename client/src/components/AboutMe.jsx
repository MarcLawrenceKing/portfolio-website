import "../styles/AboutMe.css";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me-section">
      <div className="page-title-container">
        <p className="page-title">About Me</p>
      </div>

      <div className="about-me-cards-container">
        <AboutMeCard title={"About Me"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora
          laudantium velit inventore quasi autem in? Beatae delectus minima
          incidunt in nam labore velit, iusto officia eos commodi soluta repe
        </AboutMeCard>
        <AboutMeCard title={"Education"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora
          laudantium velit inventore quasi autem in? Beatae delectus minima
          incidunt in nam labore velit, iusto officia eos commodi soluta repe
        </AboutMeCard>
        <AboutMeCard title={"Hobbies"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora
          laudantium velit inventore quasi autem in? Beatae delectus minima
          incidunt in nam labore velit, iusto officia eos commodi soluta repe
        </AboutMeCard>
      </div>
    </div>
  );
};

export default AboutMe;
