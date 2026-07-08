import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import SettingsDashboard from "../../Components/admin/SettingsDashboard";

const SettingsPage = () => {
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
            padding: "35px",
            borderRadius: "22px",
            marginTop: "30px",
            boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "56px",
              color: "#002B5B",
              fontWeight: "800",
            }}
          >
            System Settings
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: "#666",
              fontSize: "17px",
              lineHeight: "28px",
            }}
          >
            Configure university information, security policies,
            notifications, server preferences and administrator controls
            for the USTM Learning Management System.
          </p>
        </div>

        {/* Settings Dashboard */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <SettingsDashboard />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;