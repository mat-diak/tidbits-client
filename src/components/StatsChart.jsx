import React from "react";
import { useState } from "react"
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from "recharts";
import "./StatsChart.css"

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function StatsChart({ tasks }) {
  let stats = [
    { name: "Number of tasks", value: 0 }, 
    { name: "Tasks completed", value: 0 },
    { name: "Tasks started", value: 0 },
    { name: "Incomplete tasks", value: 0 },
  ];

  return (
    <div className="chart-section">
      {tasks.forEach((task) => {
        stats[0].value += 1;
        if (task.completedReps === task.targetReps) { stats[1].value += 1 };
        if (task.completedReps !== 0 && task.completedReps < task.targetReps) { stats[2].value += 1 };
        if (task.completedReps < task.targetReps) { stats[3].value += 1 };
      })}

      <div className="stats-pie-chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={stats}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#FF8042"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="stats-chart-legend">
        <h6 className="stats-chart-key">Number of tasks: </h6>
        <h6 className="stats-chart-value">{stats[0].value}</h6>
        <h6 className="stats-chart-key">Tasks completed: </h6>
        <h6 className="stats-chart-value">{stats[1].value}</h6>
        <h6 className="stats-chart-key">Tasks started: </h6>
        <h6 className="stats-chart-value">{stats[2].value}</h6>
        <h6 className="stats-chart-key">Incompleted tasks: </h6>
        <h6 className="stats-chart-value">{stats[3].value}</h6>
      </div>
    </div>
  );
}

// default colour
// fill="#8884d8"
// random colour
// fill={`${COLORS[Math.floor((Math.random() * COLORS.length))]}`}