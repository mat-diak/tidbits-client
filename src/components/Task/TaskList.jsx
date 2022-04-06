import Task from "./Task";

const TaskList = ({ tasks, onDone, onDelete, headline, message }) => {
  return (
    <div className="task-list">
      <h2>{headline}</h2>
      {tasks.length > 0 ? (
        tasks.map((task, i) => (
          <Task
            key={task._id}
            task={task}
            onDone={onDone}
            onDelete={onDelete}
          />
        ))
      ) : (
        <div className="task-message">{message}</div>
      )}
    </div>
  );
};

export default TaskList;
