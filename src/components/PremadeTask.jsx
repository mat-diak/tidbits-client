import CopyButton from "./CopyButton";
import Card from "react-bootstrap/Card";

const PremadeTask = ({ task, onCopy }) => {
  console.log(task.options)
  return (
    <Card key={task._id} className="premade-card">
      <Card.Body>{task.text}</Card.Body>
      <div className="f-flex flex-row justify-content-end">
        <CopyButton
          className="navbar-button"
          taskId={task._id}
          onCopy={onCopy}
        />
      </div>
    </Card>
  );
};

export default PremadeTask;
