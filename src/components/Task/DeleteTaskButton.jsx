import { BsXLg } from "react-icons/bs";

function DeleteTaskButton({ task, onDelete }) {
  return (
    <button className="btn delete-btn" onClick={() => onDelete(task._id)}>
        <BsXLg className="icon" size="13px"/>
    </button>
  );
}

export default DeleteTaskButton;
