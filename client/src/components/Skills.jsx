import "../styles/Skills.css";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const reactSkills = ["JSX", "useState", "useEffect", "Router"];
  const cssSkills = ["Pseudoclasses", "Responsiveness"];
  const jsSkills = ["Functions", "Objects", "DOM", "Modules"];
  const javaSkills = [
    "OOP",
    "JFrame Form (GUI)",
    "JDBC",
    "Collection Frameworks",
  ];
  const mysqlSkills = ["Join", "CRUD"];
  const figmaSkills = ["Components", "Constraints", "Prototype"];
  return (
    <div className="skills" id="skills-section">
      <div className="skills-page-title-container">
        <p className="skills-page-title">Skills</p>
      </div>

      <div className="skills-cards-container">
        <SkillsCard
          skillImage={"cssLogo"}
          skillName={"CSS"}
          skillDescription={cssSkills}
        />
        <SkillsCard
          skillImage={"jsLogo"}
          skillName={"JavaScript"}
          skillDescription={jsSkills}
        />
        <SkillsCard
          skillImage={"reactLogo"}
          skillName={"React JS"}
          skillDescription={reactSkills}
        />
        <SkillsCard
          skillImage={"javaLogo"}
          skillName={"Java"}
          skillDescription={javaSkills}
        />
        <SkillsCard
          skillImage={"mysqlLogo"}
          skillName={"MySQL"}
          skillDescription={mysqlSkills}
        />
        <SkillsCard
          skillImage={"figmaLogo"}
          skillName={"Figma"}
          skillDescription={figmaSkills}
        />
      </div>
    </div>
  );
};

export default Skills;
