import "./Header.css";

const Header = ({ leftChild, centerChild, rightChild }) => {
  return (
    <div className="header">
      <div className="header_left">{leftChild}</div>
      <div className="header_center">{centerChild}</div>
      <div className="header_right">{rightChild}</div>
    </div>
  );
};

export default Header;
