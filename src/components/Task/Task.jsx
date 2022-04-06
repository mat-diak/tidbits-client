import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import PremadeTaskOptions from "../PremadeTask/PremadeTaskOptions";
import Button from "react-bootstrap/Button";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";

const Task = ({ task, onDone, onDelete }) => {
  const [showOptions, toggleOptions] = useState(false);

  const taskFinished = (task) => {
    return task.targetReps === task.completedReps;
  };

  return (
    <div className="card" key={task._id}>
      <div className="card-header">
            <TaskReps task={task} onDone={onDone} />
            <TaskDaysToGo task={task} />
            <DeleteTaskButton task={task} onDelete={onDelete} />
      </div>
      <div className="card-body">
        <div className="card-text">{task.text}</div>
        {task.options &&
          !taskFinished(task) &&
          Object.keys(task.options).length > 0 && (
            <button
              className="options-button"
              variant="outline-danger"
              onClick={() => toggleOptions(!showOptions)}
            >
              <MdOutlineExpandMore />
            </button>
          )}
        {showOptions && <PremadeTaskOptions taskOptions={task.options} />}
      </div>
    </div>
  );
};

export default Task;
