import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axiosRestApi from "../components/axios";

function Dashboard() {
  // For redirecting to different pages
  const navigate = useNavigate()
  
  // Find the current user state; i.e. is someone logged in?
  const { user } = useSelector((state) => state.auth)
  
  // redirects to Hello page if not logged in
  useEffect(() => {
    if(!user) {
      navigate('/hello')
    }
  }, [user, navigate])
  
  const [tasks, setTasks] = useState([]);

  // gets all user tasks
  useEffect(() => {
    async function fetchTasks() {
      
      // the requests now need a second argument with the user token
      // {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`
      //   }
      // }

      const req = await axiosRestApi.get("/api/tasks", {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
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
      
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }

      const req = await axiosRestApi.put(`/api/tasks/${id}`, {
        $inc: {
          completedReps: 1,
        },
      }, config);

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
      user: user.id
    };

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const req = await axiosRestApi.post("/api/tasks", task, config);

    setTasks([...tasks, req.data]);
  };



  return (
    <div>
      <h1>Snacks</h1>
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDone={onDone} />
      ) : (
        "You have no tasks"
      )}
    </div>
  );
}

export default Dashboard;
