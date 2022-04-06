import PremadeTask from "./PremadeTask";
import Card from "react-bootstrap/Card";
import RecipeTask from "../Task/RecipeTask";

const PremadeTaskList = ({ tasks, onCopy, onRecipe }) => {
  return (
    <Card className="premade-tidbits">
      <div className="task-list">
        <RecipeTask onRecipe={onRecipe} />
        {tasks &&
          tasks.map((task) => (
            <PremadeTask key={task._id} task={task} onCopy={onCopy} />
          ))}
      </div>
    </Card>
  );
};

export default PremadeTaskList;
