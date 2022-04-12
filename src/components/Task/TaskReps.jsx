import DoneButton from "./DoneButton";

function TaskReps({ task, onDone }) {
  return (
    <div className="task-counter">
      <div className="task-reps">
        {task.completedReps} / {task.targetReps}
      </div>
      <DoneButton taskId={task._id} onDone={onDone} />
    </div>
  );
}

export default TaskReps;
