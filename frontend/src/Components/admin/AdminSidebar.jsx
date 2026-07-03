import React from "react";

const AdminSidebar = () => {
  return (
    <div
      style={{
        width: "260px",
        background: "#002B5B",
        color: "white",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "30px",
      }}
    >
      <h2>USTM LMS</h2>

      <div style={{ marginTop: "50px" }}>
        <p>🏠 Dashboard</p>
        <p>🎓 Students</p>
        <p>👨‍🏫 Teachers</p>
        <p>📚 Courses</p>
        <p>📝 Assignments</p>
        <p>📊 Reports</p>
        <p>⚙️ Settings</p>
      </div>
    </div>
  );
};

export default AdminSidebar;