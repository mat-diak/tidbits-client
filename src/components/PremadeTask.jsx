import CopyButton from "./CopyButton";
import Card from "react-bootstrap/Card";

const PremadeTask = ({ task, onCopy }) => {
  return (
    <Card key={task._id} className="task-card">
      <div className="task-text">{task.text}</div>
      <div className="task-counter">
        <div className="task-reps">
          {task.completedReps}/{task.targetReps}
        </div>
        <div className="task-btn">
          <CopyButton taskId={task._id} onCopy={onCopy} />
        </div>
      </div>
    </Card>
  );
};

export default PremadeTask;
