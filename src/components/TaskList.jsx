import Card from "react-bootstrap/Card";
import "./TaskList.css";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onDone, onDelete, headline, message }) => {
  return (
    <Card className="task-list-card">
      <div className="task-list-header">
        <div className="task-list">
          <div className="task-list-header-spacer"></div>
          <h2>{headline}</h2>
        </div>
      </div>
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <TaskCard
            key={task._id}
            task={task}
            onDone={onDone}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="task-message">{message}</div>
      )}
    </Card>
  );
};

export default TaskList;
