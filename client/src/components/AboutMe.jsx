import "../styles/AboutMe.css";
import AboutMeCard from "./AboutMeCard";

const AboutMe = () => {
  return (
    <div className="about-me" id="about-me-section">
      <div className="page-title-container">
        <p className="page-title">About Me</p>
      </div>

      <div className="about-me-cards-container">
        <AboutMeCard title={"Introduction"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
          quisquam labore mollitia dignissimos accusamus assumenda quibusdam
          fugit non! Dignissimos itaque enim quae voluptatibus deserunt
          accusamus consequuntur dolores distinctio vitae inventore.
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
