const DoneButton = ({ taskId, onDone }) => {
  return (
    <button className="btn done-btn" onClick={() => onDone(taskId)}>
      +
    </button>
  );
};

export default DoneButton;
