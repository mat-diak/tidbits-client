import DoneButton from "./DoneButton";

const Task = ({ task, onDone }) => {
  return (
    <div className="task">
      {task.text} {task.completed_reps}/{task.target_reps}
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
