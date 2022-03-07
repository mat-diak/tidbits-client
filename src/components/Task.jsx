import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import Card from "react-bootstrap/Card";

const Task = ({ task, onDone, onDelete }) => {
  return (
    <Card key={task._id} className="task-card">
      <DeleteTaskButton task={task} onDelete={onDelete} />
      {/* <button className="btn" onClick={() => onDelete(task._id)}>
        <BsXLg />
      </button> */}
      <TaskDaysToGo task={task} />
      <div className="task-text">{task.text}</div>
      <TaskReps task={task} onDone={onDone} />
    </Card>
  );
};

export default Task;
