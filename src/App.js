import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";
import DoneButton from "./components/DoneButton";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Read a book",
      completed_reps: 4,
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
      completed_reps: 10,
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

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask />
      <TaskList tasks={tasks} onDone={onDone} />
    </div>
  );
};

export default App;
