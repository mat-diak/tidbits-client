import ProgressLine from "./ProgressLine"
import "./StatsProgress.css"

const StatsProgress = ({ tasks }) => {
  return (
    <div className="progress-section">
      {tasks && tasks.map((task) => (
        <div key={task._id} className="progress-task-card">
          <div className="progress-bar-task">
            <div className="progress-task-text">{task.text}</div>
            <div className="progress-task-reps">{task.completedReps}/{task.targetReps}</div>
          </div>
          <ProgressLine
            label={null}
            visualParts={[
              {
                percentage: `${(task.completedReps / task.targetReps) * 100}%`,
                color: "teal"
              }
            ]}
          />
        </div>
      ))}
    </div>
  )
}

export default StatsProgress
