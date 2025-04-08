import SocialsSVGSection from "./SocialsSVGSection";

const AboutMe = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center py-10 bg-accent4 px-12 sm:py-20 sm:px-28">
      <p className="text-section-title">About Me</p>
      <p className="text-aboutme-subtitle1">
        My name is Marc King and I help brands grow.
      </p>
      <p className="text-aboutme-subtitle2">
        I am a motivated IT student with a background in front-end web
        development, data science, and cybersecurity!
      </p>
      <SocialsSVGSection />
    </div>
  );
};

export default AboutMe;
