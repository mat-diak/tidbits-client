import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import AddTask from "./AddTask";

const options = [
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

function AddNavbar({ name, onAdd }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        variant="primary"
        onClick={toggleShow}
        className="navbar-button me-2"
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Premade tidbits</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <AddTask onAdd={onAdd} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AddNavbar;
