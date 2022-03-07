import Modal from "react-modal"
import React, { useState } from "react"
import Card from "react-bootstrap/Card"

const StatsModal = ({ tasks, onDone }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Stats</button>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <Card className="stats-progress-card">
          <h2>TaskList</h2>
          <div className="tasks-progress-list">
            {tasks && tasks.map((task) => (
              <Card key={task._id} className="task-card">
                <div className="task-text">{task.text}</div>
                <div className="task-counter">
                  <div className="task-reps">{task.completedReps}/{task.targetReps}</div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </Modal>
    </>
  )
}

export default StatsModal;
