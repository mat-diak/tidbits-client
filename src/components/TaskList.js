// import Task from "./components/Task";

const TaskList = ({ tasks }) => {
  return ( 
  <div>
    <div>TaskList</div>
    {tasks && tasks.map(task => <div key={task.id}>{task.text}</div>)}
  </div>
  );
}

export default TaskList;
