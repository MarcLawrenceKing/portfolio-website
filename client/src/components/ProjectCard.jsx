import DefaultProject from "../assets/DefaultProject.jpg";

const ProjectCard = ({
  projectImage = DefaultProject,
  projectName = "project name",
  projectLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  projectDesc = "project desc",
}) => {
  return (
    <a href={projectLink}>
      <div className="flex flex-col-reverse mx-10 shadow-xl rounded-xl overflow-hidden bg-accent1 sm:w-120 md:w-150 lg:w-200 lg:flex-row">
        <div className="flex flex-col p-12 justify-center gap-2 flex-4">
          <p className="font-bold text-[2rem] text-center lg:text-start">
            {projectName}
          </p>
          <p>{projectDesc}</p>
        </div>
        <div className="flex bg-secondary flex-3 justify-center">
          <img src={projectImage} className="h-60 lg:h-100" />
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
