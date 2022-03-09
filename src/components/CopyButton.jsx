const CopyButton = ({ taskId, onCopy }) => {
  return (
    <button className="btn btn-outline-info" onClick={() => onCopy(taskId)}>
      Add to my tidbits
    </button>
  );
};

export default CopyButton;
