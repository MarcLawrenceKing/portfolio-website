import Banner from "../components/Banner";
import ProjectCard from "../components/ProjectCard";

import project30days from "../assets/30daysproject.jpg";
import projectdataviz from "../assets/datavizproject.jpg";
import projectportfolio from "../assets/portfolioproject.jpg";
import projectsparkfest from "../assets/sparkfestproject.jpg";
import projectexquizseat from "../assets/exquizseatproject.jpg";
import projectattendance from "../assets/attendanceproject.jpg";
import projectbotomoto from "../assets/botomotoproject.jpg";

const Projects = () => {
  const projects = [
    {
      projectImage: projectbotomoto,
      projectName: "Boto Mo 'To (2025)",
      projectDesc:
        "An online voting system developed as our capstone project, built using Next.js, Prisma ORM, and Supabase. It also uses AWS S3, and AWS SES.",
      projectLink: "https://github.com/Boto-Mo-To-Capstone-Project/BotoMoTo/",
    },
    {
      projectImage: projectattendance,
      projectName: "Attendance Mo 'To (2025)",
      projectDesc:
        "A basic attendance monitoring system developed as our final project for the Applications Development course, built using ASP .NET Core MVC and a local MS SQL Server.",
      projectLink: "https://github.com/MarcLawrenceKing/appdev-final-req",
    },
    {
      projectImage: projectportfolio,
      projectName: "Portfolio Website (2025)",
      projectDesc:
        "Enhanced my portfolio website using Vite & React, and Tailwind CSS for styling. Integrated the Google Apps Scripts to collect data from the contact form.",
      projectLink: "https://github.com/MarcLawrenceKing/portfolio-website",
    },
    {
      projectImage: projectsparkfest,
      projectName: "Sparkfest Website (2025)",
      projectDesc:
        "Contributed to the development of the official hackathon website for Google Developer Groups on Campus - PUP using Vite + React and Tailwind CSS.",
      projectLink: "https://github.com/Google-DSC-PUP/sparkfest-2025",
    },
    // {
    //   projectImage: project30days,
    //   projectName: "30 Days of Frontend (2023)",
    //   projectDesc:
    //     "Utilized HTML, CSS, and JavaScript to build simple projects, including a blog website, a rock-paper-scissors game, and a number guessing game, to apply my front end knowledge.",
    //   projectLink:
    //     "https://github.com/MarcLawrenceKing/AWSCC-PUP-Main-Frontend-Workshop",
    // },
    {
      projectImage: projectexquizseat,
      projectName: "ExQuizSeat - Mobile Quiz App (2024)",
      projectDesc:
        "Participated in the IT Skills Olympics 2024 - Android App Development Category. This project was my first experience working collaboratively with GitHub.",
      projectLink:
        "https://docs.google.com/document/d/1ItywXoAIUPukKYIV-g_E0Ep7Xno2eD18i2qK0oyJLRg/edit?tab=t.0",
    },
    {
      projectImage: projectdataviz,
      projectName: "Tableau Flood Visualization (2024)",
      projectDesc:
        "An interactive dashboard as part of the Data Management Workshop by MapaKalamidadPH in September 2024, showcasing flood data from January and February 2023.",
      projectLink:
        "https://public.tableau.com/app/profile/marc.king4953/viz/Mapakalamidad/Dashboard1?publish=yes&fbclid=IwY2xjawJcY5RleHRuA2FlbQIxMQABHfpbxiw2-b8CGOMzuU7Dv12C9bOlGpWk1-CzTt5wGWnTGqUTm5UZeCRaCg_aem_xhjXzk7Ro5D08PRaBSn6oA",
    },

    // add more project objects here
  ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28 overflow-x-hidden">
        <p className="text-section-title mb-10">Projects</p>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Projects;
