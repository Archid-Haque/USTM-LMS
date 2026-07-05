import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin",
    },
    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: "/admin/students",
    },
    {
      name: "Teachers",
      icon: <FaChalkboardTeacher />,
      path: "/admin/teachers",
    },
    {
      name: "Courses",
      icon: <FaBook />,
      path: "/admin/courses",
    },
    {
      name: "Assignments",
      icon: <FaClipboardList />,
      path: "/admin/assignments",
    },
    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },
    {
      name: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  return (
    <div
      style={{
        width: "260px",
        height: "100vh",
        background: "#002B5B",
        color: "#fff",
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
        USTM LMS
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

export default AdminSidebar;