import React from "react";
import {
  FaUserGraduate,
  FaBook,
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaBullhorn,
} from "react-icons/fa";

const PendingApprovals = () => {
  const approvals = [
    {
      icon: <FaUserGraduate />,
      title: "Student Registration",
      pending: "12 Pending",
      button: "Approve",
      color: "#198754",
    },
    {
      icon: <FaBook />,
      title: "New Course Request",
      pending: "5 Pending",
      button: "Review",
      color: "#F4B400",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Teacher Verification",
      pending: "3 Pending",
      button: "Approve",
      color: "#198754",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Assignment Extension",
      pending: "7 Requests",
      button: "View",
      color: "#0D6EFD",
    },
    {
      icon: <FaBullhorn />,
      title: "Notice Approval",
      pending: "2 Pending",
      button: "Publish",
      color: "#002B5B",
    },
  ];

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
          marginTop: 0,
          marginBottom: "5px",
          fontWeight: "700",
        }}
      >
        Pending Approvals
      </h2>

      <p
        style={{
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Items waiting for administrator approval
      </p>

      {approvals.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "14px",
            background: "#F8FAFD",
            border: "1px solid #E5EAF2",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#EAF2FF",
                color: "#002B5B",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "20px",
              }}
            >
              {item.icon}
            </div>

            <div>
              <h4
                style={{
                  margin: 0,
                  color: "#002B5B",
                }}
              >
                {item.title}
              </h4>

              <p
                style={{
                  margin: "5px 0 0 0",
                  color: "#777",
                  fontSize: "14px",
                }}
              >
                {item.pending}
              </p>
            </div>
          </div>

          <button
            style={{
              background: item.color,
              color: "#fff",
              border: "none",
              padding: "9px 18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {item.button}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PendingApprovals;