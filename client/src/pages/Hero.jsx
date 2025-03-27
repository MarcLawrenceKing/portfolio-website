import Button from "../components/Button";
import HeaderPicture from "../components/HeaderPicture";
import AboutMe from "../components/AboutMe";
import Navbar from "../components/Navbar";

const Hero = () => {
  // const downloadPDF = () => {
  //   const link = document.createElement("a");
  //   link.href =
  //     "https://www.canva.com/design/DAGTJNTlXbM/G37zun6D4B09cUu83ERMlQ/edit?utm_content=DAGTJNTlXbM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"; // Replace with your PDF file path
  //   link.target = "_blank";
  //   link.click(); // Trigger the download
  // };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-30 mx-10 pb-12 sm:mx-20 md:mx-30 2xl:mx-12 2xl:flex-row 2xl:mt-15">
        <div className="flex items-center flex-col 2xl:items-start ">
          <p className="hero-fields">WEB DEVELOPMENT · DATA SCIENCE</p>
          <p className="text-hero2">I can help your business</p>
          <p className="text-hero1">go online with modern websites.</p>
          <div className="flex flex-col gap-3 mt-12 w-full justify-center sm:flex-row sm:gap-9 2xl:justify-start">
            <Button size="lg">
              <p className="text-btn">Resume</p>
            </Button>
            <Button variant="secondary" size="lg">
              <p className="text-btn">Projects</p>
            </Button>
          </div>
        </div>
        <div className="mt-15 mb-10 2xl:ml-30">
          <HeaderPicture />
        </div>
      </div>
      <AboutMe />
    </div>
  );
};

export default Hero;
