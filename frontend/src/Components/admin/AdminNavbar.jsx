import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const AdminNavbar = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "25px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <div>
        <h2 style={{ color: "#002B5B", margin: 0 }}>
          Welcome Back, Admin 👋
        </h2>

        <p style={{ color: "#666" }}>
          USTM LMS Control Center
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <FaBell size={24} color="#002B5B" />
        <FaUserCircle size={40} color="#002B5B" />
      </div>
    </div>
  );
};

export default AdminNavbar;