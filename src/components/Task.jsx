import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import Card from "react-bootstrap/Card";
import "./Task.css";

const Task = ({ task, onDone, onDelete }) => {
  return (
    <Card key={task._id} className="task-card">
      <DeleteTaskButton task={task} onDelete={onDelete} />
      <TaskDaysToGo task={task} />
      <div className="task-text">{task.text}</div>
      <TaskReps task={task} onDone={onDone} />
    </Card>
  );
};

export default Task;
