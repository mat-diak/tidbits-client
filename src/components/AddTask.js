import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState();
  const [times, setTimes] = useState();

  return (
    <form className="add-form">
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
