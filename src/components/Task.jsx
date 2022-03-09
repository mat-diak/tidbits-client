import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import Card from "react-bootstrap/Card";
import "./Task.css";

const Task = ({ task, onDone, onDelete }) => {
  return (
    <Card key={task._id} className="task-card">
      <div className="row">
        <div className="col">
          <div className="row task-details">
            <div className="col-4 task-days-to-go">
              <TaskDaysToGo task={task} />
            </div>
            <div className="col-1 task-delete-btn">
              <DeleteTaskButton task={task} onDelete={onDelete} />
            </div>
          </div>
          <div className="row task-text">{task.text}</div>
        </div>
        <div className="col-2">
          <TaskReps className="col-3" task={task} onDone={onDone} />
        </div>
      </div>
    </Card>
  );
};

export default Task;
