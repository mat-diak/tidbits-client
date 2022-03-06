import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.userData;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);

  console.log(userData)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.userData;
};

const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login
};

export default authService;
