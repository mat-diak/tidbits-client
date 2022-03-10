import TaskDaysToGo from "./TaskDaysToGo";
import TaskReps from "./TaskReps";
import DeleteTaskButton from "./DeleteTaskButton";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import "./Task.css";
import PremadeTaskOptions from "./PremadeTaskOptions";
import Button from "react-bootstrap/Button";
import { MdOutlineExpandMore } from "react-icons/md";
import { useState } from "react";

const Task = ({ task, onDone, onDelete }) => {
  const [showOptions, toggleOptions] = useState(false);

  const taskFinished = (task) => {
    return task.targetReps === task.completedReps;
  };
  
  return (
    <Card className="task-card" key={task._id}>
      <Card.Header>
        <Nav className="task-details" variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <TaskReps task={task} onDone={onDone} />
          </Nav.Item>
          <Nav.Item>
            <TaskDaysToGo task={task} />
          </Nav.Item>
          <Nav.Item>
            <DeleteTaskButton task={task} onDelete={onDelete} />
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Text>{task.text}</Card.Text>
        {task.options &&
        !taskFinished(task) &&
        Object.keys(task.options).length > 0 && (
          <Button
            className="options-button"
            variant="outline-danger"
            onClick={() => toggleOptions(!showOptions)}
          >
            <MdOutlineExpandMore />
          </Button>
        )}
      {showOptions && <PremadeTaskOptions taskOptions={task.options} />}
      </Card.Body>
    </Card>
  );
};

export default Task;
