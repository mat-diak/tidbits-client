import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task id={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
