import { useState, useEffect } from "react";
import restApi from "../features/tasks/tasksService";
import { useSelector } from "react-redux";

export default function useTasks(initialValue) {
  const [tasks, setTasks] = useState(initialValue);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await restApi.getTasks(user);

      setTasks(tasks);
    }

    if (user) {
      fetchTasks();
    }
  }, [user]);

  return [tasks, setTasks];
}
