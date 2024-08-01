import "../styles/Projects.css"
import ProjectCard from "./ProjectCard";

const Projects = () => {

  const CEDCategories = ['Java', 'JFrame Form', 'JDBC', 'MySQL', 'MVC Framework'];
  const myPortfolioCategories = ['Figma', 'Figma Prototype'];

  return (
    <div className="projects" id="projects-section">
      <p className="page-title">Projects</p>

      <div className="projects-card-container">
      <ProjectCard projectImage={"imageMarc"} projectName={"Centralized Enrollment Database (CED)"} projectCategories={CEDCategories}/>
      <ProjectCard projectImage={"portfolioProject"} projectName={"My Portfolio (Design)"} projectCategories={myPortfolioCategories}/>
      </div>      
    </div>
  );
};

export default Projects;