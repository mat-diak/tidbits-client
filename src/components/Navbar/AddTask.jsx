import { useState } from "react";
import { toast } from "react-toastify";

const AddTask = ({ onAdd }) => {
  const [inputText, setinputText] = useState("");
  const [inputRepCounter, setinputRepCounter] = useState(1);
  const [inputDayCounter, setinputDayCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) onAdd(inputText, inputRepCounter, inputDayCounter);

    if (!inputText) {
      toast("Describe the task!");
      return;
    }
    setinputText("");
    setinputRepCounter(1);
    setinputDayCounter(1);
  };

  const updatedInput = (e) => {
    setinputText(e.currentTarget.value);
  };

  const incrementRepCount = (e) => {
    e.preventDefault();
    setinputRepCounter(inputRepCounter + 1);
  };

  const incrementDayCount = (e) => {
    e.preventDefault();
    setinputDayCounter(inputDayCounter + 1);
  };

  return (
    <div className="form-group add-task">
      <div>Make a tidbit</div>
      <form className="add-task-form">
        <div className="form-group add-task">
          <input
            type="text"
            className="task-input"
            value={inputText}
            onChange={updatedInput}
            placeholder="Describe the tidbit..."
          ></input>
          <div className="add-task-opt">
            <div className="text">Days goal:</div>
            <button
              className="btn btn-counter days-button"
              type="submit"
              onClick={incrementDayCount}
            >
              {inputDayCounter}
            </button>
          </div>
          <div className="add-task-opt">
            <div className="text">Times a day goal:</div>
            <button
              className="btn btn-counter reps-button"
              type="submit"
              onClick={incrementRepCount}
            >
              {inputRepCounter}
            </button>
          </div>
          <button
            type="submit"
            className="btn btn-navbar add-task-button"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
