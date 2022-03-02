import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Read a book",
      target_reps: 4,
      completed_reps: 5,
    },
    {
      id: 2,
      text: "Read the news (politics)",
      target_reps: 0,
      completed_reps: 1,
    },
    {
      id: 3,
      text: "Pet your cards",
      target_reps: 10,
      completed_reps: 10,
    },
  ]);

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
