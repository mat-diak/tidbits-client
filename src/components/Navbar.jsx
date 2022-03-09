import "./Navbar.css";
import { MdKitchen, MdCoffeeMaker } from "react-icons/md";
import { BiCookie } from "react-icons/bi";
import { useState } from "react";
import PremadesNavbar from "./PremadesNavbar";
import AddNavbar from "./AddNavbar";

function Navbar({ premadeTasks, onCopy, onAdd }) {
  // Toggling Add Task Form
  const [showAddTask, toggleAddTask] = useState(false);
  const [showPremadeList, togglePremadeList] = useState(false);

  const resetNavbar = () => {
    toggleAddTask(false);
    togglePremadeList(false);
  };

  return (
    <div className="col-7 main-navbar">
      <AddNavbar
        name={
          <>
            <BiCookie /> Make a tidbit
          </>
        }
        onAdd={onAdd}
      />
      <PremadesNavbar
        name={
          <>
            <MdKitchen /> Grab a tidbit
          </>
        }
        premadeTasks={premadeTasks}
        onCopy={onCopy}
      />
    </div>
  );
}
export default Navbar;
