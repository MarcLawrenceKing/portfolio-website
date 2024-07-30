import "../styles/Skills.css"
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div className="skills">
      <p className="page-title" id="skills-section">Skills</p>

      <div className="skills-cards-container">
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>
        <SkillsCard/>

      </div>
    </div>
  );
};

export default Skills;