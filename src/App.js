import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axiosRestApi from "./components/axios";
import { useState, useEffect } from "react";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axiosRestApi.get("/api/tasks");
      setTasks(req.data);
    }

    fetchData();
  }, []);

  // Add Count to Completed Reps
  const onDone = (id) => {
  //  TODO Update the completed reps in the database
   
    setTasks(
      tasks.map((task) =>
        task.id === id && task.completed_reps < task.target_reps
          ? { ...task, completed_reps: task.completed_reps + 1 }
          : task
      )
    );
  };

  const addTask = async (text, reps) => {
    // TODO Add a task to database
    const task = {
      text: text,
      completedReps: 0,
      targetReps: reps
    }

    // !! This is working fetch method !!
    // const res = await fetch('http://localhost:5000/api/tasks', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })
    // const persistedTask = await res.json()

    const req = await axiosRestApi.post('api/tasks', task)
    const persistedTask = req.data

    setTasks([...tasks, persistedTask]);
  };

  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDone={onDone} />
      ) : (
        "There is currently no tasks"
      )}
    </div>
  );
};

export default App;
