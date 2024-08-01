import "../styles/ProjectCategory.css"

const ProjectCategory = ({category}) => {
  return (
    <div className="project-category">
      <p className="p-category-txt"> {category}</p>
    </div>
  );
};

export default ProjectCategory;