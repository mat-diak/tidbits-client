import Task from "./Task";
import Card from "react-bootstrap/Card";

const TaskList = ({ tasks, onDone, onDelete, headline }) => {
  return (
    <Card className="task-list-card">
      <h2>{headline}</h2>
      <div className="task-list">
        {tasks &&
          tasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              onDone={onDone}
              onDelete={onDelete}
            />
          ))}
      </div>
    </Card>
  );
};

export default TaskList;
