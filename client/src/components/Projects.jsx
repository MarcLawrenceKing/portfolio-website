import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const AWSCC_30D = ["HTML", "CSS", "JavaScript"];
  const PWFigma = ["Figma", "Prototype"];
  const CEDv2 = ["ReactJS", "TailwindCSS", "under construction"];
  const mpklmdd = ["Tableau", "Interactive Dashboard"];

  return (
    <div className="projects" id="projects-section">
      <div className="projects-page-title-container">
        <p className="projects-page-title">Projects</p>
      </div>

      <div className="projects-card-container">
        <ProjectCard
          projectImage={"AWSCC30DProject"}
          projectName={"30 Days of Front-End"}
          projectCategories={AWSCC_30D}
          projectLink={"AWSCCFE30D"}
        />

        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Portfolio Website"}
          projectCategories={PWFigma}
          projectLink={"PortfolioWebsiteFigma"}
        />

        <ProjectCard
          projectImage={"mpklmdd"}
          projectName={"Flood Report Visualization"}
          projectCategories={mpklmdd}
          projectLink={"mpklmdd"}
        />
        <ProjectCard
          projectImage={"CEDv2"}
          projectName={"CED v2"}
          projectCategories={CEDv2}
          projectLink={"CEDv2"}
        />
      </div>
    </div>
  );
};

export default Projects;
