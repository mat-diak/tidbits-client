import CopyButton from "./CopyButton";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PremadeTaskOptions from "./PremadeTaskOptions";
import { useState } from "react";
import {MdOutlineExpandMore} from 'react-icons/md'

const PremadeTask = ({ task, onCopy }) => {
  
  const [showOptions, toggleOptions] = useState(false)
  
  return (
    <Card key={task._id} className="premade-card">
      <Card.Body>{task.text}</Card.Body>
      <div className="f-flex flex-row justify-content-end">
      <CopyButton className='navbar-button' taskId={task._id} onCopy={onCopy} />
      <Button className='navbar-button' variant="outline-info" onClick={() => toggleOptions(!showOptions)}><MdOutlineExpandMore /></Button>
      {showOptions && <PremadeTaskOptions />}
        
        </div>
    </Card>
  );
};

export default PremadeTask;
