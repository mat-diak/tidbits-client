import Task from "./Task";

const TaskList = ({ tasks, onDone }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task id={task.id} task={task} onDone={onDone} />
      ))}
    </div>
  );
};

export default TaskList;
