import { useState } from "react";
import Form from "react-bootstrap/Form";
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
    <div className="add-task-card">
      <Form className="add-task-form">
        <Form.Group>
          <Form.Control
            type="text"
            className="add-task-input"
            value={inputText}
            onChange={updatedInput}
            placeholder="Add a task.."
          ></Form.Control>
          <p>
            How many days do you wanna keep the habit for?
            <button
              className="counter-btn"
              type="submit"
              onClick={incrementDayCount}
            >
              {inputDayCounter}
            </button>
          </p>
          <p>
            How many times a day?{" "}
            <button
              className="counter-btn"
              type="submit"
              onClick={incrementRepCount}
            >
              {inputRepCounter}
            </button>
          </p>
          <button
            type="submit"
            className="add-task-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTask;
