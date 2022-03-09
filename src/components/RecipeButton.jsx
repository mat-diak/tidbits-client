const RecipeButton = ({ task, onRecipe }) => {
  return (
    <button className="btn btn-outline-info" onClick={() => onRecipe(task)}>
      Add to my tidbits
    </button>
  );
};

export default RecipeButton;
