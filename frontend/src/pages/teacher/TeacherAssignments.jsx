import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";

import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaPlus,
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const TeacherAssignments = () => {

  const assignments = [
    {
      title: "Data Structures Assignment 5",
      course: "Data Structures",
      due: "20 July 2026",
      submissions: 72,
      total: 86,
      status: "Active",
    },
    {
      title: "Machine Learning Project",
      course: "Machine Learning",
      due: "25 July 2026",
      submissions: 31,
      total: 54,
      status: "Pending",
    },
    {
      title: "Database Lab Report",
      course: "Database Systems",
      due: "18 July 2026",
      submissions: 100,
      total: 100,
      status: "Completed",
    },
    {
      title: "Operating Systems Quiz",
      course: "Operating Systems",
      due: "22 July 2026",
      submissions: 58,
      total: 72,
      status: "Active",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        background: "#F4F7FC",
        minHeight: "100vh",
      }}
    >

      <TeacherSidebar />

      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "30px",
        }}
      >

        <TeacherNavbar />

        {/* Header */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            marginBottom: "30px",
          }}
        >

          <h1
            style={{
              color: "#002B5B",
              marginBottom: "10px",
            }}
          >
            Assignment Management
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            Create assignments, monitor submissions,
            review student work and publish grades.
          </p>

        </div>

        {/* Statistics */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "20px",
            marginBottom: "35px",
          }}
        >

          {[
            {
              title: "Assignments",
              value: "28",
              icon: <FaClipboardList />,
              color: "#2563EB",
            },
            {
              title: "Pending Review",
              value: "46",
              icon: <FaClock />,
              color: "#F59E0B",
            },
            {
              title: "Completed",
              value: "18",
              icon: <FaCheckCircle />,
              color: "#10B981",
            },
            {
              title: "Students",
              value: "312",
              icon: <FaUsers />,
              color: "#EF4444",
            },
          ].map((card, index) => (

            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              }}
            >

              <div
                style={{
                  color: card.color,
                  fontSize: "30px",
                  marginBottom: "18px",
                }}
              >
                {card.icon}
              </div>

              <h2>{card.value}</h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {card.title}
              </p>

            </div>

          ))}

        </div>
                {/* Search & Actions */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            padding: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#F4F7FC",
              padding: "12px 18px",
              borderRadius: "10px",
              minWidth: "320px",
            }}
          >

            <FaSearch color="#666" />

            <input
              type="text"
              placeholder="Search assignments..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                marginLeft: "12px",
                width: "100%",
                fontSize: "15px",
              }}
            />

          </div>

          <button
            style={{
              background: "#002B5B",
              color: "#ffffff",
              border: "none",
              padding: "14px 24px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            <FaPlus />

            Create Assignment

          </button>

        </div>

        {/* Assignment Table */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            overflowX: "auto",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Assignment Overview
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >

            <thead>

              <tr
                style={{
                  background: "#002B5B",
                  color: "#ffffff",
                }}
              >

                <th style={headStyle}>Assignment</th>
                <th style={headStyle}>Course</th>
                <th style={headStyle}>Due Date</th>
                <th style={headStyle}>Progress</th>
                <th style={headStyle}>Status</th>
                <th style={headStyle}>Actions</th>

              </tr>

            </thead>

            <tbody>

              {assignments.map((item, index) => {

                const percentage = Math.round(
                  (item.submissions / item.total) * 100
                );

                return (

                  <tr key={index}>

                    <td style={cellStyle}>
                      {item.title}
                    </td>

                    <td style={cellStyle}>
                      {item.course}
                    </td>

                    <td style={cellStyle}>
                      {item.due}
                    </td>

                    <td style={cellStyle}>

                      <div
                        style={{
                          width: "180px",
                        }}
                      >

                        <div
                          style={{
                            height: "8px",
                            background: "#E5E7EB",
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >

                          <div
                            style={{
                              width: `${percentage}%`,
                              height: "100%",
                              background: "#10B981",
                            }}
                          />

                        </div>

                        <p
                          style={{
                            marginTop: "8px",
                            fontSize: "13px",
                            color: "#666",
                          }}
                        >
                          {item.submissions} / {item.total} Submitted
                        </p>

                      </div>

                    </td>

                    <td style={cellStyle}>

                      <span
                        style={{
                          background:
                            item.status === "Completed"
                              ? "#10B981"
                              : item.status === "Active"
                              ? "#2563EB"
                              : "#F59E0B",

                          color: "#ffffff",
                          padding: "8px 14px",
                          borderRadius: "20px",
                          fontSize: "13px",
                        }}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td style={cellStyle}>

                                              <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >

                        <button
                          style={{
                            background: "#2563EB",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                        >
                          <FaEye />
                        </button>

                        <button
                          style={{
                            background: "#F59E0B",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                        >
                          <FaEdit />
                        </button>

                        <button
                          style={{
                            background: "#EF4444",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px",
                            borderRadius: "8px",
                            cursor: "pointer",
                          }}
                        >
                          <FaTrash />
                        </button>

                      </div>

                    </td>

                  </tr>

                );

              })}

            </tbody>

          </table>

        </div>

        {/* Bottom Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginTop: "30px",
          }}
        >

          {/* Upcoming Deadlines */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "20px",
              }}
            >
              Upcoming Deadlines
            </h2>

            {assignments.slice(0, 3).map((item, index) => (

              <div
                key={index}
                style={{
                  padding: "16px",
                  background: "#F8FAFD",
                  borderRadius: "12px",
                  marginBottom: "15px",
                }}
              >

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
                    marginTop: "8px",
                    color: "#666",
                  }}
                >
                  Due: {item.due}
                </p>

              </div>

            ))}

          </div>

          {/* Pending Reviews */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "20px",
              }}
            >
              Pending Reviews
            </h2>

            {[
              "Rahul Sharma submitted ML Assignment",
              "Priya Das submitted Database Lab",
              "Amit Roy submitted OS Quiz",
              "Sneha Paul submitted Data Structures",
            ].map((review, index) => (

              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "15px",
                  borderBottom: "1px solid #EEEEEE",
                }}
              >

                <FaClock color="#F59E0B" />

                <span>{review}</span>

              </div>

            ))}

          </div>

        </div>
                {/* Footer */}

        <div
          style={{
            marginTop: "35px",
            background: "#002B5B",
            color: "#ffffff",
            padding: "30px",
            borderRadius: "20px",
            textAlign: "center",
          }}
        >

          <h2
            style={{
              marginTop: 0,
            }}
          >
            Assignment Management Center
          </h2>

          <p
            style={{
              color: "#E5E7EB",
              marginTop: "12px",
              lineHeight: "28px",
            }}
          >
            Efficiently create assignments, review submissions,
            publish grades and monitor student performance from
            one centralized workspace.
          </p>

        </div>

      </div>

    </div>
  );
};

const headStyle = {
  padding: "16px",
  textAlign: "center",
  fontWeight: "600",
};

const cellStyle = {
  padding: "16px",
  textAlign: "center",
  borderBottom: "1px solid #EEEEEE",
};

export default TeacherAssignments;
        