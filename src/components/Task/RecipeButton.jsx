const RecipeButton = ({ task, onRecipe }) => {
  return (
    <button className="btn btn-navbar" onClick={() => onRecipe(task)}>
      Add
    </button>
  );
};

export default RecipeButton;
