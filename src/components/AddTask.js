import { useState } from "react";
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Card from "react-bootstrap/Card"

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
          className="add"
          value={inputText}
          onChange={updatedInput}
          placeholder="Add a task.."
        ></Form.Control>
        <p>
          How many times a day?{" "}
          <Button variant="info" className="counter-btn" type="submit" onClick={incrementCount}>
            {inputCounter}
          </Button>
        </p>
        <Button type="submit" className="add-button" onClick={handleSubmit}>
          Submit
        </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddTask;
