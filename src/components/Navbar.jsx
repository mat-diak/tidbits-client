import "./Navbar.css";
import { MdKitchen } from "react-icons/md";
import { BiCookie } from "react-icons/bi";
import PremadesNavbar from "./PremadesNavbar";
import AddNavbar from "./AddNavbar";
import StatsModal from "./StatsModal";
import "./StatsModal.css";

function Navbar({ tasks, premadeTasks, onCopy, onAdd, onRecipe }) {
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
        onRecipe={onRecipe}
      />
      <div className="task-list-stats-btn">
        <StatsModal tasks={tasks} />
      </div>
    </div>
  );
}
export default Navbar;
