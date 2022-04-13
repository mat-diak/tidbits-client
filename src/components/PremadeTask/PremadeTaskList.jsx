import PremadeTask from "./PremadeTask";
import RecipeTask from "../Task/RecipeTask";

const PremadeTaskList = ({ tasks, onCopy, onRecipe }) => {
  return (
    <div className="task-list">
      <h2>Premade tidbits</h2>
      <RecipeTask onRecipe={onRecipe} />
      {tasks &&
        tasks.map((task) => (
          <PremadeTask key={task._id} task={task} onCopy={onCopy} />
        ))}
    </div>
  );
};

export default PremadeTaskList;
