import React from "react";

const SystemStatus = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h3>🟢 System Status</h3>

      <p>Server : Online</p>
      <p>Database : Connected</p>
      <p>API : Running</p>
      <p>Security : Protected</p>
    </div>
  );
};

export default SystemStatus;