import React from "react";
import AdminSidebar from "../../Components/admin/AdminSidebar";
import AdminNavbar from "../../Components/admin/AdminNavbar";
import ReportsDashboard from "../../Components/admin/ReportsDashboard";

const ReportsPage = () => {
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
            borderRadius: "20px",
            marginTop: "30px",
            textAlign: "center",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "56px",
              color: "#002B5B",
              fontWeight: "700",
            }}
          >
            Reports & Analytics
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: "#666",
              fontSize: "17px",
              lineHeight: "30px",
            }}
          >
            Monitor university-wide academic performance, attendance,
            assignments, departmental statistics and institutional growth
            through comprehensive analytics.
          </p>
        </div>

        {/* Reports Dashboard */}
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <ReportsDashboard />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;