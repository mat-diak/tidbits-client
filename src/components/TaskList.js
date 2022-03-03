import Task from "./Task";
import DoneButton from "./DoneButton";

const TaskList = ({ tasks, onDone }) => {
  return (
    <div>
      <div>TaskList</div>
      {tasks &&
        tasks.map((task) => (
          <div key={task.id}>
            {task.text} {task.completed_reps}/{task.target_reps}
            <p
              onClick={() => {
                onDone(task.id);
              }}
            >
              <DoneButton />
            </p>
          </div>
        ))}
    </div>
  );
};

export default TaskList;
