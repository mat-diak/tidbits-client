import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [inputText, setinputText] = React.useState("");
  const [inputCounter, setinputCounter] = React.useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    if(onAdd) onAdd(inputText)
    setinputText("");
  }

  const updatedInput = e => {
    setinputText(e.currentTarget.value)
  }

  const incrementCount = e => {
    e.preventDefault();
    setinputCounter(inputCounter + 1)
  }

  return (
    <form>
      <input type="text" className="add" value={inputText} onChange={updatedInput}></input>
      <p>How many times a day? <button className="counter-btn" type="submit" onClick={incrementCount}>{inputCounter}</button></p>
      <button type="submit" className="add-button" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default AddTask;