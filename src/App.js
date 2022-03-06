import Dashboard from "./pages/Dashboard";
import Hello from "./pages/Hello";
import Header from "./components/Header";
import axiosRestApi from "./components/axios";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

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

    const req = await axiosRestApi.post("api/tasks", task);

    setTasks([...tasks, req.data]);
  };

  return (
    <>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard tasks={tasks} onAdd={addTask} onDone={onDone} />
              }
            />
            <Route path="/hello" element={<Hello />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
