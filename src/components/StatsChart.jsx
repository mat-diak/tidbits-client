import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import "./StatsChart.css";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042"];

export default function StatsChart({ tasks }) {
  let numberOfTasks = 0;
  let stats = [
    { name: "Tasks completed", value: 0 },
    { name: "Tasks started", value: 0 },
    { name: "Incomplete tasks", value: 0 },
  ];

  return (
    <div className="chart-section">
      {tasks.forEach((task) => {
        numberOfTasks += 1;
        if (task.completedReps === task.targetReps) {
          stats[0].value += 1;
        }
        if (task.completedReps !== 0) {
          stats[1].value += 1;
        }
        if (task.completedReps < task.targetReps) {
          stats[2].value += 1;
        }
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
          >
            {stats.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="stats-chart-legend">
        <h6 className="stats-chart-key">Number of tasks: </h6>
        <h6 className="stats-chart-value">{numberOfTasks}</h6>
        <h6 className="stats-chart-key">Tasks completed: </h6>
        <h6 className="stats-chart-value">{stats[0].value}</h6>
        <h6 className="stats-chart-key">Tasks started: </h6>
        <h6 className="stats-chart-value">{stats[1].value}</h6>
        <h6 className="stats-chart-key">Incompleted tasks: </h6>
        <h6 className="stats-chart-value">{stats[2].value}</h6>
      </div>
    </div>
  );
}
