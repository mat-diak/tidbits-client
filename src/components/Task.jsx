import DoneButton from "./DoneButton";
import Card from "react-bootstrap/Card"

const Task = ({ task, onDone }) => {
  return (
    <Card key={task._id} className="task-card">
      <div className="task-text">{task.text}</div>
      <div className="task-counter">
        <div className="task-reps">{task.completedReps}/{task.targetReps}</div>
        <div className="task-btn">
          <DoneButton taskId={task._id} onDone={onDone} />
        </div>
      </div>
    </Card>
  )
}

export default Task;
