import { BsXLg } from "react-icons/bs";

function DeleteTaskButton({ task, onDelete }) {
  
  console.log(task._id)
  
  return (
    <button className="btn" onClick={() => onDelete(task._id)}>
      <BsXLg />
    </button>
  );
}

export default DeleteTaskButton;
