const CopyButton = ({ taskId, onCopy }) => {
  return (
    <button className="btn btn-navbar" onClick={() => onCopy(taskId)}>
      Add
    </button>
  );
};

export default CopyButton;
