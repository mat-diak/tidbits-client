import Card from "react-bootstrap/Card";
import RecipeButton from "./RecipeButton";
import { GiCookingPot } from "react-icons/gi";

const RecipeTask = ({ onRecipe }) => {
  const task = {
    text: "Get 5 random healthy recipes ",
    completedReps: 0,
    targetReps: 1,
  };

  return (
    <Card className="premade-card">
      <Card.Body>
        {task.text} <GiCookingPot />
      </Card.Body>
      <div className="f-flex flex-row justify-content-end">
        <RecipeButton onRecipe={onRecipe} task={task} />
      </div>
    </Card>
  );
};

export default RecipeTask;
