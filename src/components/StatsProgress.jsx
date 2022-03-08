import ProgressLine from "./ProgressLine"
import "./StatsProgress.css"

const StatsProgress = ({ tasks }) => {
  return (
    <div className="progress-section">
      {tasks && tasks.map((task) => (
        <div key={task._id} className="progress-task-card">
          {/* <div className="progress-task-text">{task.text}</div> */}
          {/* <div className="progress-bar-task"> */}
            <div className="progress-task-reps">{task.completedReps}/{task.targetReps}</div>
            <ProgressLine
              label={task.text}
              visualParts={[
                {
                  percentage: `${(task.completedReps / task.targetReps) * 100}%`,
                  color: "green"
                }
              ]}
            />
          {/* </div> */}
        </div>
      ))}
    </div>
  )
}

export default StatsProgress
