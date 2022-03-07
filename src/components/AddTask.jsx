import { useState } from "react";
import Form from "react-bootstrap/Form"

const AddTask = ({ onAdd }) => {
  const [inputText, setinputText] = useState("");
  const [inputCounter, setinputCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) onAdd(inputText, inputCounter);

    if (!onAdd) {
      alert("Please add a task");
      return;
    }
    setinputText("");
    setinputCounter(0);
  };

  const updatedInput = (e) => {
    setinputText(e.currentTarget.value);
  };

  const incrementCount = (e) => {
    e.preventDefault();
    setinputCounter(inputCounter + 1);
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
          How many times a day?{" "}
          <button className="counter-btn" type="submit" onClick={incrementCount}>
            {inputCounter}
          </button>
        </p>
        <button type="submit" className="add-task-button" onClick={handleSubmit}>
          Submit
        </button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTask;
