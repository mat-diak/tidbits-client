import PremadeTask from "./PremadeTask";
import Card from "react-bootstrap/Card";

const PremadeTaskList = ({ tasks }) => {
  return (
    <Card className="task-list-card">
      <h2>PremadeTaskList</h2>
      <div className="task-list">
        {tasks &&
          tasks.map((task) => <PremadeTask key={task._id} task={task} />)}
      </div>
    </Card>
  );
};

export default PremadeTaskList;
