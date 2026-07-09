import React from "react";
import {
  FaBell,
  FaUserCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const TeacherNavbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "25px 30px",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        marginBottom: "30px",
      }}
    >
      {/* Left Section */}

      <div>

        <h2
          style={{
            margin: 0,
            color: "#002B5B",
            fontWeight: "700",
          }}
        >
          Welcome Back, Teacher 👋
        </h2>

        <p
          style={{
            marginTop: "8px",
            color: "#666",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "15px",
          }}
        >
          <FaCalendarAlt color="#F4B400" />
          {today}
        </p>

      </div>

      {/* Right Section */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px",
        }}
      >

        <div
          style={{
            position: "relative",
            cursor: "pointer",
          }}
        >
          <FaBell
            size={24}
            color="#002B5B"
          />

          <span
            style={{
              position: "absolute",
              top: "-6px",
              right: "-6px",
              background: "#EF4444",
              color: "#ffffff",
              borderRadius: "50%",
              width: "18px",
              height: "18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "600",
            }}
          >
            5
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >

          <FaUserCircle
            size={42}
            color="#002B5B"
          />

          <div>

            <div
              style={{
                fontWeight: "700",
                color: "#002B5B",
              }}
            >
              Md. Jainul Abudin
            </div>

            <div
              style={{
                fontSize: "14px",
                color: "#666",
              }}
            >
              Assistant Professor
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TeacherNavbar;