import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  const [taskOne, setTaskOne] = useState("");
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

  const addTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length + 1,
      text: task
    }])
  }

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={addTask}/>
      <TaskList tasks={tasks} />
      <div>
      <p>{taskOne}</p>
      </div>
    </div>
  );
};

export default App;
