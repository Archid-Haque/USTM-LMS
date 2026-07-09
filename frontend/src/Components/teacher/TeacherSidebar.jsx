import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBookOpen,
  FaClipboardList,
  FaCalendarCheck,
  FaBullhorn,
  FaChartLine,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const TeacherSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/teacher",
    },
    {
      name: "My Courses",
      icon: <FaBookOpen />,
      path: "/teacher/courses",
    },
    {
      name: "Assignments",
      icon: <FaClipboardList />,
      path: "/teacher/assignments",
    },
    {
      name: "Attendance",
      icon: <FaCalendarCheck />,
      path: "/teacher/attendance",
    },
    {
      name: "Announcements",
      icon: <FaBullhorn />,
      path: "/teacher/announcements",
    },
    {
      name: "Analytics",
      icon: <FaChartLine />,
      path: "/teacher/analytics",
    },
    {
      name: "Profile",
      icon: <FaUserCircle />,
      path: "/teacher/profile",
    },
    {
      name: "Logout",
      icon: <FaSignOutAlt />,
      path: "/",
    },
  ];

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#002B5B",
        color: "#ffffff",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "30px 20px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "45px",
          fontWeight: "700",
        }}
      >
        Teacher Portal
      </h2>

      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          style={{
            textDecoration: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              padding: "14px 16px",
              marginBottom: "10px",
              borderRadius: "12px",
              cursor: "pointer",
              background:
                location.pathname === item.path
                  ? "#F4B400"
                  : "transparent",
              color:
                location.pathname === item.path
                  ? "#002B5B"
                  : "#ffffff",
              transition: "0.3s",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                fontSize: "18px",
              }}
            >
              {item.icon}
            </span>

            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TeacherSidebar;