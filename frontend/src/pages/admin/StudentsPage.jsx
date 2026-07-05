import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import StudentsTable from "../../Components/admin/StudentsTable";

const StudentsPage = () => {
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

        {/* Page Header */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            marginTop: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#002B5B",
              fontSize: "32px",
            }}
          >
            Student Management
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
              fontSize: "16px",
            }}
          >
            Manage all students enrolled in the USTM Learning Management System.
          </p>
        </div>

        {/* Student Table Section */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <StudentsTable />
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;