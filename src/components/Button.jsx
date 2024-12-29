import "./Button.css";

const Button = ({ text, onClick, type }) => {
  return (
    <button className={`button button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
