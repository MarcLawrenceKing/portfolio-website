import "../styles/AboutMe.css"
import AboutMeCard from "./AboutMeCard";

const AboutMe = () =>{
  return(
    <div className="about-me" id="about-me-section">
    <p className="page-title">About Me</p>

      <div className="about-me-cards-container">
        <AboutMeCard title={"About Me"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora laudantium velit inventore quasi autem in? Beatae delectus minima incidunt in nam labore velit, iusto officia eos commodi soluta repellat? </AboutMeCard>
        <AboutMeCard title={"Education"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora laudantium velit inventore quasi autem in? Beatae delectus minima incidunt in nam labore velit, iusto officia eos commodi soluta repellat? </AboutMeCard>
        <AboutMeCard title={"Hobbies"}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tempora laudantium velit inventore quasi autem in? Beatae delectus minima incidunt in nam labore velit, iusto officia eos commodi soluta repellat?  </AboutMeCard>
      </div>    
    </div>
  );
};

export default AboutMe;