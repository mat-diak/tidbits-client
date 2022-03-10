import Modal from "react-modal";
import React, { useState } from "react";
import StatsProgress from "./StatsProgress";
import StatsChart from "./StatsChart";
import Button from "react-bootstrap/Button";
import "./StatsModal.css";
import {GoGraph} from 'react-icons/go'

// Modal.setAppElement("#root");
// if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const StatsModal = ({ tasks }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="secondary"
        className="navbar-button me-2"
        onClick={() => setModalIsOpen(true)}
        style={{borderRadius: "1em", width: "180px"}}
      >
        <GoGraph /> Tidbits overview
      </Button>
      <Modal
        className="stats-modal"
        overlayClassName="stats-modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
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
      </Modal>
    </>
  );
};

export default StatsModal;
