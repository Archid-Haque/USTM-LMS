import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", users: 420 },
  { month: "Feb", users: 510 },
  { month: "Mar", users: 690 },
  { month: "Apr", users: 880 },
  { month: "May", users: 1120 },
  { month: "Jun", users: 1380 },
  { month: "Jul", users: 1625 },
];

const EnrollmentChart = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        height: "420px",
      }}
    >
      <h2
        style={{
          marginBottom: "5px",
          color: "#002B5B",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        LMS Active Users Trend
      </h2>

      <p
        style={{
          color: "#777",
          marginBottom: "25px",
          textAlign: "center",
        }}
      >
        Monthly active users on the USTM Learning Management System
      </p>

      <ResponsiveContainer width="100%" height="82%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="5 5" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#002B5B"
            strokeWidth={4}
            dot={{
              r: 6,
              fill: "#F4B400",
              stroke: "#002B5B",
              strokeWidth: 3,
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EnrollmentChart;