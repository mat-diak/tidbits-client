import Task from "./Task";

const TaskList = ({ tasks, onDone }) => {
  return (
    <div>
      <div>TaskList</div>
      {tasks &&
        tasks.map((task) => (
          <Task key={task._id} task={task} onDone={onDone} />
        ))}
    </div>
  );
};

export default TaskList;
