import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Read a book",
      completed_reps: 2,
      target_reps: 5,
    },
    {
      id: 2,
      text: "Read the news (politics)",
      completed_reps: 0,
      target_reps: 1,
    },
    {
      id: 3,
      text: "Pet your cards",
      completed_reps: 3,
      target_reps: 10,
    },
  ]);

  // Add Count to Completed Reps
  const onDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id && task.completed_reps < task.target_reps
          ? { ...task, completed_reps: task.completed_reps + 1 }
          : task
      )
    );
  };

  const addTask = (task, reps) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        text: task,
        completed_reps: 0,
        target_reps: reps,
      },
    ]);
  };

  return (
    <div className="tasks-page">
      <h1>Snacks</h1>
      <div className="tasks-page-body">
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onDone={onDone} />
      </div>
    </div>
  );
};

export default App;
