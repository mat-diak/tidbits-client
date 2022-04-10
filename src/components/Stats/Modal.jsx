import Modal from "react-modal";
import React, { useState } from "react";
import StatsProgress from "./StatsProgress";
import StatsChart from "./StatsChart";

// Modal.setAppElement("#root");
// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const StatsModal = ({ tasks, modalIsOpen, toggleModal }) => {
  return (
    <>
      <Modal // Modal
        className="stats-modal"
        overlayClassName="stats-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => toggleModal()}
        ariaHideApp={false}
      >
        <h2 className="stats-modal-heading">Today's overview</h2>
        <div className="stats-modal-group">
          <div className="stats-modal-progress-group">
            <StatsProgress tasks={tasks} />
          </div>
          <div className="stats-modal-chart-group">
            <StatsChart tasks={tasks} />
          </div>
        </div>
      </Modal> // Modal
    </>
  );
};

export default StatsModal;
