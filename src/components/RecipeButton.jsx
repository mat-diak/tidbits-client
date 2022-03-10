const RecipeButton = ({ task, onRecipe }) => {
  return (
    <button className="btn btn-outline-info" onClick={() => onRecipe(task)}>
      Add
    </button>
  );
};

export default RecipeButton;
