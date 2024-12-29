import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal_overlay" onClick={onClose}></div>
      <div className="modal_body">{children}</div>
    </div>
  );
};

export default Modal;
