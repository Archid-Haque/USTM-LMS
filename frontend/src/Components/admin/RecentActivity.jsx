import React from "react";
import {
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaBullhorn,
  FaCircle,
} from "react-icons/fa";

const activities = [
  {
    icon: <FaUserGraduate />,
    title: "New Student Registered",
    description: "Rahul Sharma enrolled in B.Tech CSE",
    time: "10:42 AM",
    color: "#0D6EFD",
  },
  {
    icon: <FaBook />,
    title: "Course Updated",
    description: "Database Management notes uploaded",
    time: "10:18 AM",
    color: "#198754",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Assignments Submitted",
    description: "84 students submitted Assignment 4",
    time: "09:57 AM",
    color: "#F4B400",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Faculty Added",
    description: "Dr. Ahmed joined Computer Science Department",
    time: "09:31 AM",
    color: "#6F42C1",
  },
  {
    icon: <FaBullhorn />,
    title: "Notice Published",
    description: "Semester Examination Schedule Released",
    time: "Yesterday",
    color: "#DC3545",
  },
];

const RecentActivity = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        height: "100%",
      }}
    >
      <h2
        style={{
          color: "#002B5B",
          marginBottom: "5px",
          fontWeight: "700",
        }}
      >
        Recent Activities
      </h2>

      <p
        style={{
          color: "#777",
          marginBottom: "25px",
        }}
      >
        Latest activities happening across the LMS
      </p>

      {activities.map((activity, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "15px",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              background: activity.color,
              color: "#fff",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            {activity.icon}
          </div>

          <div style={{ flex: 1 }}>
            <h4
              style={{
                margin: 0,
                color: "#002B5B",
                fontSize: "16px",
              }}
            >
              {activity.title}
            </h4>

            <p
              style={{
                margin: "6px 0",
                color: "#666",
                fontSize: "14px",
              }}
            >
              {activity.description}
            </p>

            <small
              style={{
                color: "#999",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <FaCircle size={7} color="#198754" />
              {activity.time}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;