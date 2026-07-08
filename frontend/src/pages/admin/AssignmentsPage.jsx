import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import AssignmentsDashboard from "../../Components/admin/AssignmentsDashboard";

const AssignmentsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px",
          boxSizing: "border-box",
        }}
      >
        {/* Navbar */}
        <AdminNavbar />

        {/* Header */}
        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "20px",
            marginTop: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#002B5B",
              fontSize: "46px",
              fontWeight: "700",
            }}
          >
            Assignment Management
          </h1>

          <p
            style={{
              marginTop: "12px",
              color: "#666",
              fontSize: "20px",
            }}
          >
            Monitor assignments, submissions, reviews and overall academic
            progress across the USTM Learning Management System.
          </p>
        </div>

        {/* Dashboard */}
        <div
          style={{
            marginTop: "35px",
          }}
        >
          <AssignmentsDashboard />
        </div>
      </div>
    </div>
  );
};

export default AssignmentsPage;