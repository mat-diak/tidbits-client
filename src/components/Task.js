import DoneButton from "./DoneButton";

const Task = ({ task, onDone }) => {
  return (
    <div>
      {" "}
      <h3> {`${task.text} ${task.completed_reps} / ${task.target_reps}`} </h3>
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
