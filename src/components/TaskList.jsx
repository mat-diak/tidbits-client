import Task from "./Task"
import Card from "react-bootstrap/Card"

const TaskList = ({ tasks, onDone }) => {
  return (
    <Card className="task-list-card">
      <h2>TaskList</h2>
      <div className="task-list">
        {tasks && tasks.map((task) => (
          <Task task={task} onDone={onDone} />
        ))}
      </div>
    </Card>
  )
}

export default TaskList;
