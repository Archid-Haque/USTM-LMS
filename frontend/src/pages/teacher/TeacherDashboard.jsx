import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";
import TeacherDashboardContent from "../../Components/teacher/TeacherDashboardContent";

const TeacherDashboard = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <TeacherSidebar />

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
        <TeacherNavbar />

        {/* Teacher Dashboard */}
        <TeacherDashboardContent />
      </div>
    </div>
  );
};

export default TeacherDashboard;