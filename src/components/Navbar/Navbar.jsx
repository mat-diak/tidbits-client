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
    modal: false
  });

  const toggleAdd = () => setShow((s) => {
    return {
      add: !s.add,
      grab: false,
      overview: false
    }
  });

  const toggleGrab = () => setShow((s) => {
    return { 
      add: false,
      grab: !s.grab,
      overview: false
  }
  })

  const toggleModal = () => setShow((s) => {
    return {
      add: false,
      grab: false,
      modal: !s.modal
    }
  } );

  return (
    <>
      <div className="main-navbar">
        <button className="btn btn-navbar" onClick={toggleAdd}>
          <BiCookie /> Make a tidbit
        </button>
        <button className="btn btn-navbar" onClick={toggleGrab}>
          <MdKitchen /> Grab a tidbit
        </button>
        <button className="btn btn-navbar" onClick={toggleModal}>
          <GoGraph /> Daily stats
        </button>
      </div>

      <div className="navbar-expand">
        {show.add && (
          <div>
            <AddTask onAdd={onAdd} />
          </div>
        )}
        {show.grab && (
          <PremadeTaskList
            tasks={premadeTasks}
            onCopy={onCopy}
            onRecipe={onRecipe}
          />
        )}
        {show.modal && 
          <StatsModal 
          tasks={tasks}
          modalIsOpen={show.modal}
          toggleModal={toggleModal}
          className="stats-modal"
          />
        }

      </div>
    </>
  );
}
export default Navbar;
