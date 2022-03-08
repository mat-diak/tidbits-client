import PremadeTask from "./PremadeTask";
import Card from "react-bootstrap/Card";

const PremadeTaskList = ({ tasks, onCopy }) => {
  return (
    <Card className="premade-tasks">
      <h2>Premade tidbits</h2>
      <div className="task-list">
        {tasks &&
          tasks.map((task) => (
            <PremadeTask key={task._id} task={task} onCopy={onCopy} />
          ))}
      </div>
    </Card>
  );
};

export default PremadeTaskList;
