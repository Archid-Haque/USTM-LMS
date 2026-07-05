import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Engineering", value: 38 },
  { name: "Management", value: 21 },
  { name: "Pharmacy", value: 14 },
  { name: "Science", value: 15 },
  { name: "Nursing", value: 12 },
];

const COLORS = [
  "#002B5B",
  "#0D6EFD",
  "#198754",
  "#F4B400",
  "#DC3545",
];

const CoursePieChart = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <h3
        style={{
          color: "#002B5B",
          marginBottom: "5px",
          textAlign: "center",
        }}
      >
        Course Distribution
      </h3>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Students by Faculty
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={95}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CoursePieChart;