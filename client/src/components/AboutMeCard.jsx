import "../styles/AboutMeCard.css";

const AboutMeCard = ({ title, children }) => {
  return (
    <div className="about-me-card">
      <div className="abt-me-card-title-container">{title}</div>
      <div className="abt-me-card-content-container">{children}</div>
    </div>
  );
};

export default AboutMeCard;
