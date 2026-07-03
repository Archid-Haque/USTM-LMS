import React from "react";

const QuickActions = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h3>⚡ Quick Controls</h3>

      <button>Add Student</button>
      <br /><br />

      <button>Add Teacher</button>
      <br /><br />

      <button>Create Course</button>
      <br /><br />

      <button>Send Notice</button>
    </div>
  );
};

export default QuickActions;