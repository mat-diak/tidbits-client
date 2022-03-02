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

  const doneButton = () => {
    console.log("I clicked done!");
  };

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask />
      <TaskList tasks={tasks} />
      <DoneButton doneButton={doneButton} />
    </div>
  );
};

export default App;
