import "../styles/ProjectCard.css"
import Image from "./Image";
import ProjectCategory from "./ProjectCategory";

const ProjectCard = ({projectImage, projectName, projectCategories}) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
      <Image variant={"project-image"} imageKey={projectImage}></Image> 
      </div>          
      <div className="project-categories-container">
      <p className="project-name"> {projectName}</p> <br/>

      {projectCategories.map((category, index) => (
        <ProjectCategory key={index} category={category}/>
      ))}
      
      </div>
    </div>
  );
};

export default ProjectCard;