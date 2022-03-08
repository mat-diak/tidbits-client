import PremadeTask from "./PremadeTask";
import "./Navbar.css";
import { MdKitchen, MdCoffeeMaker } from "react-icons/md";
import { BiCookie } from "react-icons/bi";
import { useState } from "react";
import AddTask from "./AddTask";
import PremadeTaskList from "./PremadeTaskList";
import Button from "react-bootstrap/Button";

function Navbar({ premadeTasks, onCopy, onAdd }) {
  // Toggling Add Task Form
  const [showAddTask, toggleAddTask] = useState(false);
  const [showPremadeList, togglePremadeList] = useState(false);

  const resetNavbar = () => {
    toggleAddTask(false);
    togglePremadeList(false);
  };

  return (
    <div className="row">
      <div className="col-2 icons">
        {/* icon for creating a task */}
        <Button
          onClick={() => {
            resetNavbar();
            toggleAddTask(!showAddTask);
          }}
        >
          <BiCookie />
        </Button>

        {/* button for premade tasks */}
        <Button
          onClick={() => {
            resetNavbar();
            togglePremadeList(!showPremadeList);
          }}
        >
          <MdKitchen />
        </Button>
      </div>

      {/* */}
      <div className="col-10 main-navbar">
        {showAddTask && <AddTask onAdd={onAdd} />}
        {showPremadeList && (
          <PremadeTaskList tasks={premadeTasks} onCopy={onCopy} />
        )}
      </div>
    </div>
  );
}
export default Navbar;
