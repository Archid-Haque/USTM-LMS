import React from "react";

const StatsCards = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>1245</h2>
        <p>Students</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>86</h2>
        <p>Teachers</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>52</h2>
        <p>Courses</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <h2>731</h2>
        <p>Active Users</p>
      </div>
    </div>
  );
};

export default StatsCards;