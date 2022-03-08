import Modal from "react-modal";
import React, { useState } from "react";
import StatsProgress from "./StatsProgress";
import "./StatsModal.css";

Modal.setAppElement("#root");

const StatsModal = ({ tasks }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <button className="stats-btn" onClick={() => setModalIsOpen(true)}>
        Stats
      </button>
      <Modal
        className="stats-modal"
        overlayClassName="stats-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>TaskList</h2>
        <div className="stats-modal-group">
          <StatsProgress tasks={tasks} />
        </div>
      </Modal>
    </>
  );
};

export default StatsModal;
