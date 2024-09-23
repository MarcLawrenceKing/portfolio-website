import "../styles/Skills.css";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const reactSkills = ["React JSX", "React useState", "React useEffect"];
  const cssSkills = [
    "CSS Positions",
    "CSS Pseudoclasses",
    "CSS Display",
    "CSS Responsiveness",
  ];
  const jsSkills = ["JS Functions", "JS Objects", "JS DOM", "JS Modules"];
  const javaSkills = [
    "Java OOP",
    "JFrame Form (GUI)",
    "JDBC",
    "Collection Frameworks",
  ];
  const mysqlSkills = ["SQL Join", "SQL Functions"];
  const figmaSkills = [
    "Figma Components",
    "Figma Constraints",
    "Figma Prototype",
  ];
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
