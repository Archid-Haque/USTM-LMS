import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";

import {
  FaBullhorn,
  FaBell,
  FaPaperPlane,
  FaThumbtack,
  FaCalendarAlt,
  FaUsers,
  FaBookOpen,
  FaSearch,
} from "react-icons/fa";

const announcements = [
  {
    title: "Machine Learning Mid Semester Examination",
    course: "Machine Learning",
    date: "18 July 2026",
    audience: "54 Students",
    status: "Published",
  },
  {
    title: "Database Lab Submission Extended",
    course: "Database Systems",
    date: "17 July 2026",
    audience: "100 Students",
    status: "Scheduled",
  },
  {
    title: "Operating Systems Viva Notice",
    course: "Operating Systems",
    date: "16 July 2026",
    audience: "72 Students",
    status: "Published",
  },
  {
    title: "Data Structures Extra Class",
    course: "Data Structures",
    date: "15 July 2026",
    audience: "86 Students",
    status: "Pinned",
  },
];

const TeacherAnnouncements = () => {
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
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            marginBottom: "30px",
          }}
        >

          <h1
            style={{
              color: "#002B5B",
              marginBottom: "10px",
            }}
          >
            Announcement Center
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            Publish announcements, schedule notices and communicate
            important updates with your students.
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
              title: "Published",
              value: "42",
              icon: <FaBullhorn />,
              color: "#2563EB",
            },
            {
              title: "Scheduled",
              value: "8",
              icon: <FaCalendarAlt />,
              color: "#F59E0B",
            },
            {
              title: "Pinned",
              value: "5",
              icon: <FaThumbtack />,
              color: "#EF4444",
            },
            {
              title: "Reached",
              value: "312",
              icon: <FaUsers />,
              color: "#16A34A",
            },
          ].map((card,index)=>(

            <div
              key={index}
              style={{
                background:"#ffffff",
                borderRadius:"18px",
                padding:"25px",
                boxShadow:"0 8px 20px rgba(0,0,0,.08)",
              }}
            >

              <div
                style={{
                  color:card.color,
                  fontSize:"30px",
                  marginBottom:"18px",
                }}
              >
                {card.icon}
              </div>

              <h2>{card.value}</h2>

              <p
                style={{
                  color:"#666",
                }}
              >
                {card.title}
              </p>

            </div>

          ))}

        </div>
                {/* Announcement Composer */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            marginBottom: "35px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Create New Announcement
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >

            <div>

              <label
                style={{
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Announcement Title
              </label>

              <input
                type="text"
                placeholder="Enter announcement title"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />

            </div>

            <div>

              <label
                style={{
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Select Course
              </label>

              <select
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              >

                <option>Machine Learning</option>
                <option>Data Structures</option>
                <option>Database Systems</option>
                <option>Operating Systems</option>

              </select>

            </div>

          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              marginBottom: "20px",
            }}
          >

            <div>

              <label
                style={{
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Audience
              </label>

              <select
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              >

                <option>All Students</option>
                <option>Only My Course</option>
                <option>Selected Batch</option>

              </select>

            </div>

            <div>

              <label
                style={{
                  fontWeight: "600",
                  color: "#555",
                }}
              >
                Publish Date
              </label>

              <input
                type="date"
                style={{
                  width: "100%",
                  padding: "14px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                  outline: "none",
                }}
              />

            </div>

          </div>

          <label
            style={{
              fontWeight: "600",
              color: "#555",
            }}
          >
            Announcement Message
          </label>

          <textarea
            rows="6"
            placeholder="Write your announcement here..."
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              outline: "none",
              resize: "none",
              marginBottom: "25px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >

            <button
              style={{
                background: "#F4B400",
                color: "#002B5B",
                border: "none",
                padding: "14px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "600",
              }}
            >

              <FaBookOpen />

              Attach File

            </button>

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
              }}
            >

              <FaPaperPlane />

              Publish Announcement

            </button>

          </div>

        </div>
                {/* Search & Announcements Table */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          {/* Search */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "25px",
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
                placeholder="Search announcements..."
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  marginLeft: "12px",
                  width: "100%",
                }}
              />

            </div>

            <button
              style={{
                background: "#16A34A",
                color: "#ffffff",
                border: "none",
                padding: "14px 24px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              View Archive
            </button>

          </div>

          {/* Table */}

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

                <th style={headStyle}>Announcement</th>
                <th style={headStyle}>Course</th>
                <th style={headStyle}>Date</th>
                <th style={headStyle}>Audience</th>
                <th style={headStyle}>Status</th>
                <th style={headStyle}>Actions</th>

              </tr>

            </thead>

            <tbody>

              {announcements.map((item,index)=>(

                <tr key={index}>

                  <td style={cellStyle}>
                    {item.title}
                  </td>

                  <td style={cellStyle}>
                    {item.course}
                  </td>

                  <td style={cellStyle}>
                    {item.date}
                  </td>

                  <td style={cellStyle}>
                    {item.audience}
                  </td>

                  <td style={cellStyle}>

                    <span
                      style={{
                        background:
                          item.status === "Published"
                            ? "#16A34A"
                            : item.status === "Scheduled"
                            ? "#2563EB"
                            : "#F59E0B",

                        color:"#ffffff",
                        padding:"8px 16px",
                        borderRadius:"20px",
                        fontSize:"13px",
                      }}
                    >
                      {item.status}
                    </span>

                  </td>

                  <td style={cellStyle}>

                    <div
                      style={{
                        display:"flex",
                        justifyContent:"center",
                        gap:"10px",
                      }}
                    >

                      <button
                        style={{
                          background:"#2563EB",
                          color:"#ffffff",
                          border:"none",
                          padding:"9px 12px",
                          borderRadius:"8px",
                          cursor:"pointer",
                        }}
                      >
                        View
                      </button>

                      <button
                        style={{
                          background:"#F59E0B",
                          color:"#ffffff",
                          border:"none",
                          padding:"9px 12px",
                          borderRadius:"8px",
                          cursor:"pointer",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        style={{
                          background:"#EF4444",
                          color:"#ffffff",
                          border:"none",
                          padding:"9px 12px",
                          borderRadius:"8px",
                          cursor:"pointer",
                        }}
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Bottom Section */}

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"1fr 1fr",
            gap:"25px",
            marginTop:"30px",
          }}
        >

          {/* Recent Activity */}

          <div
            style={{
              background:"#ffffff",
              borderRadius:"20px",
              padding:"25px",
              boxShadow:"0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color:"#002B5B",
                marginBottom:"20px",
              }}
            >
              Recent Announcement Activity
            </h2>

            {[
              "Machine Learning notice viewed by 48 students",
              "Database Lab notice published successfully",
              "OS Viva notice scheduled for tomorrow",
              "Extra Class notice pinned successfully",
            ].map((item,index)=>(

              <div
                key={index}
                style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"12px",
                  padding:"15px",
                  borderBottom:"1px solid #EEEEEE",
                }}
              >

                <FaBell color="#2563EB"/>

                <span>{item}</span>

              </div>

            ))}

          </div>

          {/* Quick Insights */}

          <div
            style={{
              background:"#ffffff",
              borderRadius:"20px",
              padding:"25px",
              boxShadow:"0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color:"#002B5B",
                marginBottom:"20px",
              }}
            >
              Communication Insights
            </h2>

            {[
              "92% students viewed announcements within 24 hours.",
              "Pinned announcements receive the highest engagement.",
              "Average response rate is 87%.",
              "Most active course: Database Systems.",
            ].map((item,index)=>(

              <div
                key={index}
                style={{
                  padding:"14px",
                  background:"#F8FAFD",
                  borderLeft:"5px solid #F4B400",
                  borderRadius:"10px",
                  marginBottom:"14px",
                }}
              >
                {item}
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
            Teacher Communication Center
          </h2>

          <p
            style={{
              color: "#E5E7EB",
              marginTop: "12px",
              lineHeight: "28px",
            }}
          >
            Publish announcements, schedule notices, keep students
            informed and ensure timely communication across all
            courses from one centralized workspace.
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

export default TeacherAnnouncements;