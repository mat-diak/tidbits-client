import PremadeTask from "./PremadeTask";
import RecipeTask from "../Task/RecipeTask";

const PremadeTaskList = ({ tasks, onCopy, onRecipe }) => {
  return (
    <div className="task-list">
      <div>Premade tidbits</div>
      <div className="task-list">
        <RecipeTask onRecipe={onRecipe} />
        {tasks &&
          tasks.map((task) => (
            <PremadeTask key={task._id} task={task} onCopy={onCopy} />
          ))}
      </div>
    </div>
  );
};

export default PremadeTaskList;
