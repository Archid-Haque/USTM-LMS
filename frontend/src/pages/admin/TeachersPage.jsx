import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import TeachersTable from "../../Components/admin/TeachersTable";

const TeachersPage = () => {
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
              fontWeight: "700",
            }}
          >
            Teacher Management
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
              fontSize: "18px",
            }}
          >
            Manage all faculty members of the USTM Learning Management System.
          </p>
        </div>

        {/* Teachers Table */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <TeachersTable />
        </div>
      </div>
    </div>
  );
};

export default TeachersPage;