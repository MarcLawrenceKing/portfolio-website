import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const CEDCategories = [
    "Java",
    "JFrame Form",
    "JDBC",
    "MySQL",
    "MVC Framework",
  ];
  const myPortfolioCategories = ["Figma", "Figma Prototype"];

  return (
    <div className="projects" id="projects-section">
      <div className="projects-page-title-container">
        <p className="projects-page-title">Projects</p>
      </div>

      <div className="projects-card-container">
        <ProjectCard
          projectImage={"imageMarc"}
          projectName={"Centralized Enrollment Database (CED)"}
          projectCategories={CEDCategories}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Web Portfolio (Design)"}
          projectCategories={myPortfolioCategories}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Web Portfolio (Design)"}
          projectCategories={myPortfolioCategories}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Web Portfolio (Design)"}
          projectCategories={myPortfolioCategories}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Web Portfolio (Design)"}
          projectCategories={myPortfolioCategories}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Web Portfolio (Design)"}
          projectCategories={myPortfolioCategories}
        />
      </div>
    </div>
  );
};

export default Projects;
