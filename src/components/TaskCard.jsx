import Task from "./Task";

function TaskCard({ task, onDone, onDelete }) {
  return (
    <>
      {/* render task */}
      <Task key={task._id} task={task} onDone={onDone} onDelete={onDelete} />
      {/* render options if in ongoing tasks*/}
      {/* {task.options &&
        !taskFinished(task) &&
        Object.keys(task.options).length > 0 && (
          <Button
            className="navbar-button"
            variant="outline-info"
            onClick={() => toggleOptions(!showOptions)}
          >
            <MdOutlineExpandMore />
          </Button>
        )}
      {showOptions && <PremadeTaskOptions taskOptions={task.options} />} */}
    </>
  );
}

export default TaskCard;
