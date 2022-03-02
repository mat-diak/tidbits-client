// import Task from "./components/Task";

const TaskList = ({ tasks }) => {
  return ( 
  <div>
    <div>TaskList</div>
    {tasks && tasks.map(task => <div key={task.id}>{task.text} {task.target_reps}/{task.completed_reps}</div>)}
  </div>
  );
}

export default TaskList;
