import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projectCat1 = ["category1", "category2", "category3", "category4"];
  const projectCat2 = ["category5", "category6", "category7"];
  const projectCat3 = ["category1", "category2", "category3", "category4"];
  const projectCat4 = ["category1", "category2"];
  const projectCat5 = ["category3", "category4", "category5", "category6"];
  const projectCat6 = ["category1", "category2", "category3"];
  const projectCat7 = ["category1", "category2", "category3", "category4"];

  return (
    <div className="projects" id="projects-section">
      <div className="projects-page-title-container">
        <p className="projects-page-title">Projects</p>
      </div>

      <div className="projects-card-container">
        <ProjectCard
          projectImage={"imageMarc"}
          projectName={"Project Name 1"}
          projectCategories={projectCat1}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Project Name 2"}
          projectCategories={projectCat2}
        />
        <ProjectCard
          projectImage={"imageMarc"}
          projectName={"Project Name 3"}
          projectCategories={projectCat3}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Project Name 4"}
          projectCategories={projectCat4}
        />
        <ProjectCard
          projectImage={"imageMarc"}
          projectName={"Project Name 5"}
          projectCategories={projectCat5}
        />
        <ProjectCard
          projectImage={"portfolioProject"}
          projectName={"Project Name 6"}
          projectCategories={projectCat6}
        />
      </div>
    </div>
  );
};

export default Projects;
