import { MdKitchen } from "react-icons/md";
import { BiCookie } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import StatsModal from "../Stats/Modal";
import { useState } from "react";
import AddTask from "./AddTask";
import PremadeTaskList from "../PremadeTask/PremadeTaskList";

function Navbar({ tasks, premadeTasks, onCopy, onAdd, onRecipe }) {
  const [show, setShow] = useState({
    add: false,
    grab: false,
    modal: false,
  });

  const toggleAdd = () =>
    setShow((s) => {
      return {
        add: !s.add,
        grab: false,
        overview: false,
      };
    });

  const toggleGrab = () =>
    setShow((s) => {
      return {
        add: false,
        grab: !s.grab,
        overview: false,
      };
    });

  const toggleModal = () =>
    setShow((s) => {
      return {
        add: false,
        grab: false,
        modal: !s.modal,
      };
    });

  return (
    <>
      <div className="main-navbar">
        <button className="btn btn-navbar" onClick={toggleAdd}>
          <BiCookie /> <div className="btn-text">
          Make a tidbit
          </div>
        </button>
        {show.add && <AddTask onAdd={onAdd} />}
        <button className="btn btn-navbar" onClick={toggleGrab}>
          <MdKitchen />
          <div className="btn-text">Grab a tidbit</div>
          
          
        </button>
        {show.grab && (
          <PremadeTaskList
            tasks={premadeTasks}
            onCopy={onCopy}
            onRecipe={onRecipe}
          />
        )}
        <button className="btn btn-navbar" onClick={toggleModal}>
          <GoGraph />
          <div className="btn-text">Daily stats</div>
          
        </button>
        {show.modal && (
          <StatsModal
            tasks={tasks}
            modalIsOpen={show.modal}
            toggleModal={toggleModal}
          />
        )}
      </div>
    </>
  );
}
export default Navbar;
