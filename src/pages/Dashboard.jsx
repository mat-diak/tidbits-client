import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";

function Dashboard({ tasks, onAdd, onDone }) {
  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={onAdd} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDone={onDone} />
      ) : (
        "There is currently no tasks"
      )}
    </div>
  );
}

export default Dashboard;
