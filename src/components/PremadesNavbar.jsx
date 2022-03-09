import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PremadeTaskList from "./PremadeTaskList";
import "./PremadeTask.css";

function PremadesNavbar({ name, premadeTasks, onCopy, onRecipe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        variant="secondary"
        onClick={toggleShow}
        className="me-2 navbar-button"
        style={{ borderRadius: "1em", width: "180px" }}
      >
        {name}
      </Button>
      <Offcanvas className="premade-tidbits" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Premade tidbits</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroudColor: "white"}}>
          <PremadeTaskList
            tasks={premadeTasks}
            onCopy={onCopy}
            onRecipe={onRecipe}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PremadesNavbar;
