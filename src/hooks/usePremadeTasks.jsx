import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from "axios";

export default function usePremadeTasks(initialValue) {
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

  return premadeTasks
}