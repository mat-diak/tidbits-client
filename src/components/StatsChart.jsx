import React from "react";
import { useState } from "react"
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  // { name: "Group A", value: 400 },
  // { name: "Group B", value: 300 },
  // { name: "Group C", value: 300 },
  // { name: "Group D", value: 200 },
  // { name: "Group E", value: 278 },
  // { name: "Group F", value: 189 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


export default function StatsChart({ tasks }) {
  let data = [];
  let numberOfTasks = 0;



  return (
    <div className="chart-section">
      {tasks.forEach((task) => console.log(task.text))}
      
      {/* {numberOfTasks = 0} */}
      {tasks && tasks.map((task, i) => {
          numberOfTasks += 1;
          data.push({name: `Task ${i+1}`, value: ((task.completedReps / task.targetReps) * 100)})
      })}
      {console.log(Pie.inspect)}
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill={`${COLORS[Math.floor((Math.random() * COLORS.length))]}`}
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
}

// fill="#8884d8"

{/* <div key={task._id} className="progress-task-card">
<div className="progress-bar-task">
  <div className="progress-task-text">{task.text}</div>
  <div className="progress-task-reps">
    {task.completedReps}/{task.targetReps}
  </div>
</div>
</div> */}