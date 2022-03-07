import Modal from "react-modal"
import React, { useState } from "react"
import Card from "react-bootstrap/Card"
import "./StatsModal.css"

Modal.setAppElement("#root")

const StatsModal = ({ tasks }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>Stats</button>

      <Modal portalClassName="stats-modal" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h2>TaskList</h2>
        <div className="stats-modal-group">
          <div className="progress-section">
            {tasks && tasks.map((task) => (
              <div key={task._id} className="progress-task-card">
                <div className="progress-task-text">{task.text}</div>
                <div className="progress-bar-task">
                  <div className="progress-task-reps">{task.completedReps}/{task.targetReps}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default StatsModal;
