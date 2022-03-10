const CopyButton = ({ taskId, onCopy }) => {
  return (
    <button className="btn btn-outline-info" onClick={() => onCopy(taskId)}>
      Add
    </button>
  );
};

export default CopyButton;
