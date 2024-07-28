import "../styles/Image.css"
import imageMarc from "../assets/phoenix.png"

const images = {
  imageMarc
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