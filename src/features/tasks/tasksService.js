import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks/";

const getTasks = async (data) => {
  const { token } = data;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const req = await axios.get(API_URL, config);
  return req.data;
};

const createTask = async (data) => {
  const { task, token } = data;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const req = await axios.post(API_URL, task, config);
  return req.data;
};

const incrementTaskReps = async (data) => {
  const { token, taskId } = data;

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const req = await axios.put(
    `${API_URL}${taskId}`,
    {
      $inc: {
        completedReps: 1,
      },
    },
    config
  );

  return req.data;
};

const deleteTask = async (data) => {
  const { id, user } = data
  
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  }

  const req = await axios.delete(
    `${API_URL}${id}`, config
  );

  return req.data
};

const restApi = {
  getTasks,
  createTask,
  deleteTask,
  incrementTaskReps,
};

export default restApi;
