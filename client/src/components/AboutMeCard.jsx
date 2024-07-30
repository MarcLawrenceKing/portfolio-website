import "../styles/AboutMeCard.css"

const AboutMeCard = ({children}) => {
  return (
    <div className="about-me-card">
      {children}
    </div>
  );
};

export default AboutMeCard;