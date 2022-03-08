import DoneButton from "./DoneButton";

function TaskReps({ task, onDone }) {
  return (
    <div className="task-counter">
      <div className="task-reps">
        {task.completedReps}/{task.targetReps}
      </div>
      <div className="task-btn">
        <DoneButton taskId={task._id} onDone={onDone} />
      </div>
    </div>
  );
}

export default TaskReps;
