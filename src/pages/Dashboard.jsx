import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import restApi from "../features/tasks/tasksService";
import { toast } from "react-toastify";
import axios from "axios";

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

    setTasks([createdTask, ...tasks]);
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

  return (
    <div className="row d-flex justify-content-between">
      {/* -------- */}
      <div className="col-3">
        <Navbar tasks={tasks} premadeTasks={premadeTasks} onCopy={onCopy} onAdd={addTask} />
      </div>

      <div className="col-4">
       
          <TaskList
            key={"ongoingTasks"}
            tasks={ongoingTasks}
            onDone={onDone}
            onDelete={onDelete}
            headline={"Tidbits for today"}
            message={'No tidbits left for today'}
          />
       
      </div>
      <div className="col-4">
        <TaskList
          key={"completedTasks"}
          tasks={completedTasks}
          onDone={onDone}
          onDelete={onDelete}
          headline={"Completed tidbits"}
          message={"No tidbits completed today"}
        />
      </div>
    </div>
  );
}

export default Dashboard;
