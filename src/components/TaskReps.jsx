import DoneButton from "./DoneButton";

function TaskReps({ task, onDone }) {
  return (
    <div className="task-counter">
        <DoneButton taskId={task._id} onDone={onDone} />
      <div className="task-reps">
        {task.completedReps}/{task.targetReps}
      </div>
    </div>
  );
}

export default TaskReps;
