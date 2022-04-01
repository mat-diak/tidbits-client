import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";
import restApi from "../features/tasks/tasksService";
import recipeApi from "../features/suggestedTasks/suggestedTasksService";
import { toast } from "react-toastify";
import "./Dashboard.css";
import useAuth from "../hooks/useAuth";
import useTasks from "../hooks/useTasks";
import usePremadeTasks from "../hooks/usePremadeTasks";

function Dashboard() {
  // Redirects to hello page if no user
  useAuth();

  // Find the current user state; i.e. is someone logged in?
  const { user } = useSelector((state) => state.auth);

  const [tasks, setTasks] = useTasks([]);
  const premadeTasks = usePremadeTasks([]);

  const ongoingTasks = tasks.filter(
    (task) => task.completedReps !== task.targetReps
  );
  const completedTasks = tasks.filter(
    (task) => task.completedReps === task.targetReps
  );

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
    const task = premadeTasks.find((task) => {
      return task._id === id;
    });

    // add task to the task list
    const createdTask = await restApi.createTask({
      task,
      token: user.token,
    });

    // set task using created tasks
    setTasks([createdTask, ...tasks]);
  };

  const addTask = async (text, reps, endInDays) => {
    const task = {
      text: text,
      completedReps: 0,
      targetReps: reps,
      user: user.id,
      endInDays: endInDays,
    };

    const createdTask = await restApi.createTask({ task, token: user.token });

    setTasks([createdTask, ...tasks]);
  };

  const onDelete = async (id) => {
    const res = await restApi.deleteTask({ id, user });
    setTasks(tasks.filter((task) => task._id !== res.id));
  };

  const onRecipe = async (task) => {
    const recipePremade = await recipeApi.createRecipeTask(task, user.token);

    setTasks([recipePremade, ...tasks]);
  };

  return (
    <div className="container row d-flex justify-content-between">
      <div className="col-2">
        <Navbar
          tasks={tasks}
          premadeTasks={premadeTasks}
          onCopy={onCopy}
          onAdd={addTask}
          onRecipe={onRecipe}
        />
      </div>

      <div className="col-5">
        <TaskList
          key={"ongoingTasks"}
          tasks={ongoingTasks}
          onDone={onDone}
          onDelete={onDelete}
          headline={"Tidbits for today"}
          message={"No tidbits left for today"}
        />
      </div>
      <div className="col-5">
        <TaskList
          key={"completedTasks"}
          tasks={completedTasks}
          onDone={onDone}
          onDelete={onDelete}
          headline={"Completed tidbits for today"}
          message={"No tidbits completed today"}
        />
      </div>
    </div>
  );
}

export default Dashboard;
