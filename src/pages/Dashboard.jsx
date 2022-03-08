import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import PremadeTaskList from "../components/PremadeTaskList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import restApi from "../features/tasks/tasksService";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import axios from "axios";
import StatsModal from "./components/StatsModal"

// MAYBE DELETE
import axiosRestApi from "./components/axios";

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
  const [premadeTasks, setPremadeTasks] = useState([]);

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

  // gets all premade tasks
  useEffect(() => {
    async function fetchPremadeTasks() {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const premadeTasks = await axios.get(
        "http://localhost:5000/api/premadetasks",
        config
      );

      setPremadeTasks(premadeTasks.data);
    }

    if (user) {
      fetchPremadeTasks();
    }
  }, [user]);

  // Add Count to Completed Reps
  const onDone = async (id) => {
    const consideredTask = tasks.find((task) => {
      return task._id === id;
    });

    if (consideredTask.completedReps < consideredTask.targetReps) {
      const data = {
        token: user.token,
        taskId: id,
      };

      const updatedTask = await restApi.incrementTaskReps(data);
      setTasks(
        tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
      );
    } else {
      toast("This is completed");
    }
  };

  // copies tasks from Premade to Usermade
  const onCopy = async (id) => {
    // find the task that we were interacting with
    const consideredTask = premadeTasks.find((task) => {
      return task._id === id;
    });

    // add taskOwner ID to the task
    const taskOwner = { user: user.id };

    // combine premade task with task owenr details
    const task = { ...consideredTask, ...taskOwner };

    // add task to the task list
    const createdTask = await restApi.createTask({
      task,
      token: user.token,
    });

    // set task using created tasks
    setTasks([...tasks, createdTask]);
  };

  const addTask = async (text, reps, endInDays) => {
    const task = {
      text: text,
      completedReps: 0,
      targetReps: reps,
      user: user.id,
      endInDays: endInDays,
    };

    const createdTask = await restApi.createTask({
      task,
      token: user.token,
    });

    setTasks([...tasks, createdTask]);
    toggleAddTask(!showAddTask);
  };

  const onDelete = async (id) => {
    const res = await restApi.deleteTask({
      id,
      user,
    });

    setTasks(tasks.filter((task) => task._id !== res.id));
  };

  const ongoingTasks = tasks.filter(
    (task) => task.completedReps !== task.targetReps
  );
  const completedTasks = tasks.filter(
    (task) => task.completedReps === task.targetReps
  );

  // Toggling Add Task Form
  const [showAddTask, toggleAddTask] = useState(false);

  return (
    <div>
      <PremadeTaskList tasks={premadeTasks} onCopy={onCopy} />
      <Button onClick={() => toggleAddTask(!showAddTask)}>
        Add a new task
      </Button>
      {showAddTask && <AddTask onAdd={addTask} />}
      {ongoingTasks.length > 0 ? (
        <TaskList
          key={"ongoingTasks"}
          tasks={ongoingTasks}
          onDone={onDone}
          onDelete={onDelete}
          headline={"Tidbits for today"}
        />
      ) : (
        "You have no tasks"
      )}

      {completedTasks.length > 0 ? (
        <TaskList
          key={"completedTasks"}
          tasks={completedTasks}
          onDone={onDone}
          onDelete={onDelete}
          headline={"Completed tidbits"}
        />
      ) : (
        "You have not completed any tidbits today"
      )}
    </div>
  );
}

export default Dashboard;
