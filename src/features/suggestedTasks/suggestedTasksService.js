import axios from "axios";
import config from "../helpers/reqHeadersGenerator";

const API_URL = "http://localhost:5000/api/recipes";

const createRecipeTask = async (task, token) => {
  const recipePremade = await axios.post(API_URL, task, config(token));

  return recipePremade.data;
};

const recipeApi = {
  createRecipeTask,
};

export default recipeApi;
