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
          {countDaysLeft(task.endDate)} days to go!
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default TaskDaysToGo;
