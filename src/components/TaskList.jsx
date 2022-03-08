import Task from "./Task";
import Card from "react-bootstrap/Card";
import StatsModal from "./StatsModal";
import "./TaskList.css";
import {SortableElement} from 'react-sortable-hoc';

const SortableItem = SortableElement(Task) 

const TaskList = ({ tasks, onDone, onDelete, headline }) => {
  return (
    <Card className="task-list-card">
      <div className="task-list-header">
        <div className="task-list">
          <div className="task-list-header-spacer"></div>
          <h2>{headline}</h2>
          <div className="task-list-stats-btn">
            <StatsModal tasks={tasks} />
          </div>
          {tasks &&
            tasks.map((task, i) => {
              return <SortableItem
              key={task._id}
              task={task}
              index={i}
              onDone={onDone}
              onDelete={onDelete}
              />
            })}
          </div>
        </div>
    </Card>
  );
};

export default TaskList;
