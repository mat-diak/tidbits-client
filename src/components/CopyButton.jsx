const CopyButton = ({ taskId, onCopy }) => {
  return (
    <button className="add-task-button" onClick={() => onCopy(taskId)}>
      Add
    </button>
  );
};

export default CopyButton;
