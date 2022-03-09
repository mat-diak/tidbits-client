import Task from "./Task";
import PremadeTaskOptions from "./PremadeTaskOptions";
import Button from "react-bootstrap/Button";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";

function TaskCard({ task, onDone, onDelete }) {
  const [showOptions, toggleOptions] = useState(false);

  const taskFinished = (task) => {
    return task.targetReps === task.completedReps;
  };

  return (
    <>
      {/* render task */}
      <Task key={task._id} task={task} onDone={onDone} onDelete={onDelete} />
      {/* render options if in ongoing tasks*/}
      {!taskFinished(task) && task.options.length > 0 &&(
        <Button
          className="navbar-button"
          variant="outline-info"
          onClick={() => toggleOptions(!showOptions)}
        >
          <MdOutlineExpandMore />
        </Button>
      )}
      {showOptions && <PremadeTaskOptions taskOptions={task.options} />}
    </>
  );
}

export default TaskCard;
