import DoneButton from "./DoneButton";

const Task = ({ task, onDone }) => {
  return (
    <div className="task">
      {task.text} {task.completedReps}/{task.targetReps}
      <p
        onClick={() => {
          onDone(task.id);
        }}
      >
        <DoneButton />
      </p>
    </div>
  );
};

export default Task;
