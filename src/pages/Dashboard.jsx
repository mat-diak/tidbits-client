import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import restApi from "../features/tasks/tasksService";
import { toast } from "react-toastify";

function Dashboard() {
  // For redirecting to different pages
  const navigate = useNavigate();

  // Find the current user state; i.e. is someone logged in?
  const { user } = useSelector((state) => state.auth);

  // redirects to Hello page if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/hello");
    }
  }, [user, navigate]);

  const [tasks, setTasks] = useState([]);

  // gets all user tasks
  useEffect(() => {
    async function fetchTasks() {
      const tasks = await restApi.getTasks(user);
      setTasks(tasks);
    }

    if (user) {
      fetchTasks();
    }
  }, [user]);

  // Add Count to Completed Reps
  const onDone = async (id) => {
    const consideredTask = tasks
      .find((task) => {
        return task._id === id;
      });

    if (consideredTask.completedReps < consideredTask.targetReps) {
      const data = {
        token: user.token,
        taskId: id
      }

      const updatedTask = await restApi.incrementTaskReps(data)

      setTasks(
        tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    } else {
      toast("This is completed");
    }
  };

  const addTask = async (text, reps) => {
    if (!text) {
      toast.error("Describe the task!");
    }
    
    const task = {
      text: text,
      completedReps: 0,
      targetReps: reps,
      user: user.id,
    };

    const createdTask = await restApi.createTask({
      task,
      token: user.token,
    });

    setTasks([...tasks, createdTask]);
  };

  // const deleteTask = async (task) => {
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   }
  // example format for making a request
  //   axios.delete(url, task, config)
  // }

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
