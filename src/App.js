import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

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

  // Add Tasks
  const addTask = (returnedValue) => {
    // console.log(returnedValue);
    const id = Math.floor(Math.random() * 10000);
    // console.log(id);
    const newTask = { id, ...returnedValue };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

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

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDone={onDone} />
    </div>
  );
};

export default App;
