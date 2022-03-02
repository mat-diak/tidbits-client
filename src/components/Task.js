// import DoneButton from "./DoneButton";

const Task = ({ task }) => {
  return (
    <div>
      {" "}
      <h3> {`${task.text} ${task.completed_reps} / ${task.target_reps}`} </h3>
      {/* <DoneButton onClick={onDone} /> */}
    </div>
  );
};

export default Task;
