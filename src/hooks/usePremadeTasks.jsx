import { useState, useEffect } from 'react'
import restApi from "../features/tasks/tasksService";
import { useSelector } from "react-redux";

export default function useTasks(initialValue) {
  const [premadeTasks, setPremadeTasks] = useState(initialValue);

  const { user } = useSelector((state) => state.auth);

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

  return [tasks, setTasks]
}