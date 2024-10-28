import "./actionButton.css";

const ActionButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="action-button">
      {label}
    </button>
  );
};

export default ActionButton;
