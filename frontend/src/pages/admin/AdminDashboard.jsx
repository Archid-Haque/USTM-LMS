import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import StatsCards from "../../Components/admin/StatsCards";

const AdminDashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      <AdminSidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px",
        }}
      >
        <AdminNavbar />

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
            marginTop: "30px",
          }}
        >
          <h1>Dashboard Loaded Successfully 🚀</h1>
        </div>

        <StatsCards />
      </div>
    </div>
  );
};

export default AdminDashboard;