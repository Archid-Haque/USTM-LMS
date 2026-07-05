import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import StatsCards from "../../Components/admin/StatsCards";
import EnrollmentChart from "../../Components/admin/EnrollmentChart";
import CoursePieChart from "../../Components/admin/CoursePieChart";
import RecentActivity from "../../Components/admin/RecentActivity";
import PendingApprovals from "../../Components/admin/PendingApprovals";

const AdminDashboard = () => {
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

        {/* Dashboard Banner */}
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
            }}
          >
            Dashboard Loaded Successfully 🚀
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#666",
            }}
          >
            Welcome to the USTM Learning Management System Admin Portal
          </p>
        </div>

        {/* Statistics */}
        <StatsCards />

        {/* Analytics */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <EnrollmentChart />
          <CoursePieChart />
        </div>

        {/* Activity & Approvals */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginTop: "30px",
            alignItems: "start",
          }}
        >
          <RecentActivity />

          <PendingApprovals />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;