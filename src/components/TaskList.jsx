import Task from "./Task"
import StatsModal from "./StatsModal"
import Card from "react-bootstrap/Card"
import "./TaskList.css"

const TaskList = ({ tasks, onDone }) => {
  return (
    <Card className="task-list-card">
      <div className="task-list-header">
        <div className="task-list-header-spacer"></div>
        <h2>TaskList</h2>
        <div className="task-list-stats-btn"><StatsModal tasks={tasks} /></div>
      </div>
      <div className="task-list">
        {tasks && tasks.map((task) => (
          <Task task={task} onDone={onDone} />
        ))}
      </div>
    </Card>
  )
}

export default TaskList;
