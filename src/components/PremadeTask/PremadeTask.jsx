import CopyButton from "../Navbar/CopyButton";

const PremadeTask = ({ task, onCopy }) => {
  return (
    <div key={task._id} className="card">
      <div>{task.text}</div>
      <div className="">
        <CopyButton className="btn" taskId={task._id} onCopy={onCopy} />
      </div>
    </div>
  );
};

export default PremadeTask;
