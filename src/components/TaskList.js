import DoneButton from "./DoneButton";
import Card from "react-bootstrap/Card"

const TaskList = ({ tasks, onDone }) => {
  return (
    <Card className="task-list-card">
      <div>TaskList</div>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} className="task-card">
            {task.text} {task.completed_reps}/{task.target_reps}
            <p
              onClick={() => {
                onDone(task.id);
              }}
            >
              <DoneButton />
            </p>
          </Card>
        ))}
    </Card>
  );
};

export default TaskList;
