import Task from "./Task";

const TaskList = ({ tasks, onDone}) => {
  return ( 
  <div>
    <div>TaskList</div>
    {tasks && tasks.map(task => <div key={task.id}>{task.text} {task.target_reps}/{task.completed_reps} onDone={onDone}</div>)}
  </div>
  );
}


export default TaskList;
