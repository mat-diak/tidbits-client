import DoneButton from "./DoneButton";

const Task = ({ task }) => {
  return (
    <div>
      {" "}
      <h3> {`${task.text} ${task.target_reps} / ${task.completed_reps} `} </h3>
      <DoneButton />
    </div>
  );
};

export default Task;
