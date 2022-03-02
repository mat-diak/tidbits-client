import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task task={task} />
      ))}
    </div>
  );
};

export default TaskList;
