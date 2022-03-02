const Task = ({ task }) => {
  return (
    <div>
      {" "}
      <h3> {`${task.text} ${task.target_reps} / ${task.completed_reps} `}</h3>
    </div>
  );
};

export default Task;
