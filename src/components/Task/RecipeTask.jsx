import RecipeButton from "./RecipeButton";
import { GiCookingPot } from "react-icons/gi";

const RecipeTask = ({ onRecipe }) => {
  const task = {
    text: "Get 5 random healthy recipes ",
    completedReps: 0,
    targetReps: 1,
  };

  return (
    <div className="card-body card-navbar">
      <div>
        {task.text} <GiCookingPot />
      </div>
      <RecipeButton onRecipe={onRecipe} task={task} />
    </div>
  );
};

export default RecipeTask;
