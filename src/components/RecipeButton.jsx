const RecipeButton = ({ task, onRecipe }) => {
  return (
    <button className="add-task-button" onClick={() => onRecipe(task)}>
      Add
    </button>
  );
};

export default RecipeButton;
