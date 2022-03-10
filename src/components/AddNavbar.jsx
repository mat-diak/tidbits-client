import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddTask from "./AddTask";

function AddNavbar({ name, onAdd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        variant="secondary"
        onClick={toggleShow}
        className="navbar-button me-2"
        style={{ borderRadius: "1em", width: "180px" }}
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Make a tidbit</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddTask onAdd={onAdd} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddNavbar;
