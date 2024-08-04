import "../styles/Button.css";

const Button = ({ variant, children, onClick }) => {
  return (
    <>
      <button className={`button ${variant}`} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
