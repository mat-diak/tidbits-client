import Card from "react-bootstrap/Card";

const PremadeTask = ({ task }) => {
  return (
    <Card key={task._id} className="task-card">
      <div className="task-text">{task.text}</div>
      <div className="task-counter">
        <div className="task-reps">
          {task.completedReps}/{task.targetReps}
        </div>
      </div>
    </Card>
  );
};

export default PremadeTask;
