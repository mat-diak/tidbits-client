import React, { useState } from "react";
const AddTask = () => {
  const [value, setValue] = React.useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(!value)
  // }
  return (
    <div>
      <input type="text" className="add"></input>
      <button className="add-button" value={value}>
        add
      </button>
    </div>
  );
};

export default AddTask;
