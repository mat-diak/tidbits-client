const CopyButton = ({ taskId, onCopy }) => {
  return (
    <button className="copy-btn" onClick={() => onCopy(taskId)}>
      +
    </button>
  );
};

export default CopyButton;
