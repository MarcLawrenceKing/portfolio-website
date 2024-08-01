import "../styles/Image.css"
import imageMarc from "../assets/phoenix.png"
import reactLogo from "../assets/react-logo.png"
import cssLogo from "../assets/css-logo.png"
import jsLogo from "../assets/js-logo.png"
import javaLogo from "../assets/java-logo.png"
import mysqlLogo from "../assets/mysql-logo.png"
import figmaLogo from "../assets/figma-logo.png"
import portfolioProject from "../assets/portfolio-project.png"


const images = {
  // hero image
  imageMarc,
  // skills image
  reactLogo,
  cssLogo,
  jsLogo,
  javaLogo,
  mysqlLogo,
  figmaLogo,
  // projects image
  portfolioProject
}
const Image = ({imageKey, variant}) =>{
  const imageSrc = images[imageKey];

  if (!imageSrc) return <p>Image not found</p>
  return (
    <>
    <img className={`img ${variant}`} src={imageSrc}alt={imageKey}/>
    </>
  );
};

export default Image;