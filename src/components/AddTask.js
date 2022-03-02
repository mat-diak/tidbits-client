import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState();
  const [times, setTimes] = useState();

  const onSubmit = (e) => {
    e.preventDefault(); // this prevents page refreshing

    if (!task) {
      alert("Please add a task");
      return;
    }
    // if passes, then call onAdd
    onAdd({ task, times });

    setTask("");
    setTimes("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="describe the snack"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>How many times a day? </label>
        <input
          type="number"
          value={times}
          onChange={(e) => setTimes(e.target.value)}
        />
      </div>

      <input type="submit" value="Submit" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
