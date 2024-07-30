import "../styles/SkillsCard.css"
import { FaLinkedin } from "react-icons/fa6";

const SkillsCard = () => {
  return (
    <div className="skills-card">
     <FaLinkedin size={"140px"} color={"#2e2c2f"}/>
     <span className="skill-name">Skill Name</span> <br/>
     <ul className="skill-description">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
      </ul>
    </div>
  );
};

export default SkillsCard;