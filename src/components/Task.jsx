import DoneButton from "./DoneButton";
import Card from "react-bootstrap/Card";

const Task = ({ task, onDone }) => {
  
  const countDaysLeft = (endDate) => {
    return Math.round(
      Math.abs(
        (new Date() - Date.parse(endDate)) / (24 * 60 * 60 * 1000)
      )
    )
  }
  
  return (
    <Card key={task._id} className="task-card">
      <div className="task-text">{task.text}</div>
      {task.endDate ? (
        <div className="task-dueDate">
          Days to go: {countDaysLeft(task.endDate)}
        </div>
      ) : (
        <></>
      )}
      <div className="task-counter">
        <div className="task-reps">
          {task.completedReps}/{task.targetReps}
        </div>
        <div className="task-btn">
          <DoneButton taskId={task._id} onDone={onDone} />
        </div>
      </div>
    </Card>
  );
};

export default Task;
