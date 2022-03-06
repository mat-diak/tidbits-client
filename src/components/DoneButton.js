import Button from "react-bootstrap/Button"

const DoneButton = ({ taskId, onDone }) => {
  return <button className="done-btn" onClick={() => onDone(taskId)}>+</button>;
};

export default DoneButton;
