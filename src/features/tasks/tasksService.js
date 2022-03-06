import axios from 'axios';

const API_URL = "http://localhost:5000/api/tasks/";

const getTasks = async (Data) => {
  const { token } = Data
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const req = await axios.get(API_URL, config);
  return req.data
}

const createTask = async (Data) => {
  const { task, token } = Data

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const req = await axios.post(API_URL, task, config);
  return req.data
}

const deleteTask = async () => {

}

const updateTask = async () => {

}

const restApi = {
  getTasks,
  createTask,
  deleteTask,
  updateTask
}

export default restApi;