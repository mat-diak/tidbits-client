import CopyButton from "../Navbar/CopyButton";

const PremadeTask = ({ task, onCopy }) => {
  return (
    <div key={task._id} className="card-body card-navbar">
      <div className="card-content">{task.text}</div>
      <div className="">
        <CopyButton taskId={task._id} onCopy={onCopy} />
      </div>
    </div>
  );
};

export default PremadeTask;
