import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import PremadeTaskOptions from "../PremadeTask/PremadeTaskOptions";
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
        <div className="card-details">
          <TaskDaysToGo task={task} />
          <DeleteTaskButton task={task} onDelete={onDelete} />
        </div>
      </div>
      <div className="card-body">
        <div className="card-text">{task.text}</div>
        {task.options &&
          !taskFinished(task) &&
          Object.keys(task.options).length > 0 && (
            <div className="btn-container">
              <button
                className="options-btn"
                onClick={() => toggleOptions(!showOptions)}
              >
                <MdOutlineExpandMore />
              </button>
            </div>
          )}
        {showOptions && <PremadeTaskOptions taskOptions={task.options} />}
      </div>
    </div>
  );
};

export default Task;
