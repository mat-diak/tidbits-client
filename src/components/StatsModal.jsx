import Modal from "react-modal"
import React, { useState } from "react"
import StatsProgress from "./StatsProgress"
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
          <StatsProgress tasks={tasks} />
        </div>
      </Modal>
    </>
  )
}

export default StatsModal;
