import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import PremadeTaskList from "../PremadeTask/PremadeTaskList";

function PremadesNavbar({ name, premadeTasks, onCopy, onRecipe }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="secondary" onClick={toggleShow} className="woops">
        {name}
      </Button>
      <Offcanvas className="premade-tidbits" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Premade tidbits</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
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
