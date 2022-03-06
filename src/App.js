import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import axiosRestApi from "./components/axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./styles.css"


const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const req = await axiosRestApi.get("/api/tasks");
      setTasks(req.data);
    }

    fetchTasks();
  }, []);

  // Add Count to Completed Reps
  const onDone = async (id) => {
    const consideredTask = tasks
      .filter((task) => {
        return task._id === id;
      })
      .at(0);

    if (consideredTask.completedReps < consideredTask.targetReps) {
      const req = await axiosRestApi.put(`/api/tasks/${id}`, {
        $inc: {
          completedReps: 1,
        },
      });
      const updatedTask = req.data;
      setTasks(
        tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    } else {
      alert("This is completed");
    }
  };

  const addTask = async (text, reps) => {
    const task = {
      text: text,
      completedReps: 0,
      targetReps: reps,
    };

    const req = await axiosRestApi.post("/api/tasks", task);

    setTasks([...tasks, req.data]);
  };

  return (
    <div className="tasks-page">
      <h1>Snacks</h1>
      <div className="tasks-page-body">
        <AddTask onAdd={addTask} />
        {tasks.length > 0 ? (
          <TaskList tasks={tasks} onDone={onDone} />
        ) : (
          "There are currently no tasks"
        )}
      </div>
    </div>
  );
};

export default App;
