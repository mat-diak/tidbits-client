function TaskDaysToGo({ task }) {
  const countDaysLeft = (endDate) => {
    return Math.round(
      Math.abs((new Date() - Date.parse(endDate)) / (24 * 60 * 60 * 1000))
    );
  };

  return (
    <>
      {task.endDate ? (
        <div className="task-dueDate">
          Days to go: {countDaysLeft(task.endDate)}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TaskDaysToGo;
