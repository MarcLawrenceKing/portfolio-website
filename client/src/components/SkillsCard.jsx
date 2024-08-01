import "../styles/SkillsCard.css"
import Image from "./Image";
import PropTypes from 'prop-types';

const SkillsCard = ({skillImage, skillName, skillDescription}) => {
  return (
    <div className="skills-card">
      <div className="skill-img-container">
      <Image variant={"skill-image"} imageKey={skillImage}></Image> 
      </div>
     <div className="skill-desc-container">
     <span className="skill-name">{skillName}</span> <br/>
     <ul className="skill-description">
      {skillDescription.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
     </div>
     
    </div>
  );
};

SkillsCard.propTypes = {
  skillDescription: PropTypes.array.isRequired,
};

export default SkillsCard;