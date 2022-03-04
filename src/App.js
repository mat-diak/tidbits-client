import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axios from './components/axios';
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get('/api/tasks')
      setTasks(req.data)
    }

    fetchData()
  }, [])

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
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onDone={onDone} />
    </div>
  );
};

export default App;
