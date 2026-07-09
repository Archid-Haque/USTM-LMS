import React from "react";
import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaBullhorn,
  FaCalendarAlt,
  FaUserGraduate,
  FaUpload,
  FaChartLine,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const lineData = [
  { day: "Mon", classes: 3 },
  { day: "Tue", classes: 4 },
  { day: "Wed", classes: 5 },
  { day: "Thu", classes: 4 },
  { day: "Fri", classes: 6 },
  { day: "Sat", classes: 3 },
];

const pieData = [
  { name: "Completed", value: 78 },
  { name: "Pending", value: 14 },
  { name: "Late", value: 8 },
];

const COLORS = ["#16A34A", "#F59E0B", "#DC2626"];

const TeacherDashboardContent = () => {
  return (
    <div style={{ marginTop: "30px" }}>

      {/* ===========================
          Welcome Banner
      =========================== */}

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
            margin: 0,
            color: "#002B5B",
            fontSize: "38px",
            fontWeight: "700",
          }}
        >
          Welcome Back, Md. Jainul Abudin 👋
        </h1>

        <p
          style={{
            marginTop: "12px",
            color: "#666",
            fontSize: "18px",
          }}
        >
          Computer Science Department • 5 Active Courses • 312 Students
        </p>

        <p
          style={{
            marginTop: "18px",
            color: "#888",
            lineHeight: "30px",
          }}
        >
          Here's your teaching overview for today. Review assignments,
          upload study materials, publish announcements and monitor your
          students from one place.
        </p>
      </div>

      {/* ===========================
          Statistics Cards
      =========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "25px",
          marginBottom: "35px",
        }}
      >

        {/* Card 1 */}

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaBookOpen
            size={35}
            color="#002B5B"
          />

          <h2
            style={{
              marginTop: "18px",
              color: "#002B5B",
            }}
          >
            5
          </h2>

          <p style={{ color: "#666" }}>
            Active Courses
          </p>

        </div>

        {/* Card 2 */}

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaUserGraduate
            size={35}
            color="#16A34A"
          />

          <h2
            style={{
              marginTop: "18px",
              color: "#002B5B",
            }}
          >
            312
          </h2>

          <p style={{ color: "#666" }}>
            Students
          </p>

        </div>

        {/* Card 3 */}

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaClipboardCheck
            size={35}
            color="#F59E0B"
          />

          <h2
            style={{
              marginTop: "18px",
              color: "#002B5B",
            }}
          >
            48
          </h2>

          <p style={{ color: "#666" }}>
            Pending Reviews
          </p>

        </div>

        {/* Card 4 */}

        <div
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "18px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >
          <FaBullhorn
            size={35}
            color="#2563EB"
          />

          <h2
            style={{
              marginTop: "18px",
              color: "#002B5B",
            }}
          >
            12
          </h2>

          <p style={{ color: "#666" }}>
            Announcements
          </p>

        </div>

      </div>
            {/* ===========================
          Today's Schedule & Quick Actions
      =========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "35px",
        }}
      >

        {/* Today's Classes */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Today's Teaching Schedule
          </h2>

          {[
            {
              time: "09:00 - 10:00",
              course: "Data Structures",
              room: "Room 302",
            },
            {
              time: "11:00 - 12:00",
              course: "Database Systems",
              room: "Room 204",
            },
            {
              time: "02:00 - 03:30",
              course: "Machine Learning Lab",
              room: "Lab 5",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F8FAFD",
                padding: "18px",
                borderRadius: "15px",
                marginBottom: "18px",
              }}
            >

              <div>

                <h3
                  style={{
                    margin: 0,
                    color: "#002B5B",
                  }}
                >
                  {item.course}
                </h3>

                <p
                  style={{
                    marginTop: "8px",
                    color: "#666",
                  }}
                >
                  {item.room}
                </p>

              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >

                <FaClock color="#F59E0B" />

                <p
                  style={{
                    marginTop: "8px",
                    fontWeight: "600",
                  }}
                >
                  {item.time}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Quick Actions */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Quick Actions
          </h2>

          {[
            {
              icon: <FaUpload />,
              title: "Upload Notes",
              color: "#2563EB",
            },
            {
              icon: <FaClipboardCheck />,
              title: "Create Assignment",
              color: "#16A34A",
            },
            {
              icon: <FaCalendarAlt />,
              title: "Take Attendance",
              color: "#F59E0B",
            },
            {
              icon: <FaBullhorn />,
              title: "Publish Notice",
              color: "#DC2626",
            },
          ].map((item, index) => (
            <button
              key={index}
              style={{
                width: "100%",
                marginBottom: "18px",
                border: "none",
                cursor: "pointer",
                background: item.color,
                color: "#ffffff",
                padding: "16px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {item.icon}

              {item.title}
            </button>
          ))}

        </div>

      </div>
            {/* ===========================
          Analytics Section
      =========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "35px",
        }}
      >

        {/* Weekly Teaching Load */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            height: "430px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "5px",
            }}
          >
            Weekly Teaching Load
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Number of classes conducted this week
          </p>

          <ResponsiveContainer
            width="100%"
            height="80%"
          >

            <LineChart data={lineData}>

              <CartesianGrid strokeDasharray="4 4" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="classes"
                stroke="#002B5B"
                strokeWidth={4}
                dot={{
                  r: 6,
                  fill: "#F4B400",
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Assignment Status */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            height: "430px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "5px",
            }}
          >
            Assignment Status
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Current submission overview
          </p>

          <ResponsiveContainer
            width="100%"
            height="80%"
          >

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >

                {pieData.map((entry,index)=>(

                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />

                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ===========================
          My Courses
      =========================== */}

      <div
        style={{
          background:"#ffffff",
          borderRadius:"20px",
          padding:"30px",
          boxShadow:"0 8px 20px rgba(0,0,0,.08)",
          marginBottom:"35px",
        }}
      >

        <h2
          style={{
            color:"#002B5B",
            marginBottom:"25px",
          }}
        >
          My Active Courses
        </h2>

        <table
          style={{
            width:"100%",
            borderCollapse:"collapse",
          }}
        >

          <thead>

            <tr
              style={{
                background:"#002B5B",
                color:"#ffffff",
              }}
            >

              <th style={headStyle}>Course</th>
              <th style={headStyle}>Semester</th>
              <th style={headStyle}>Students</th>
              <th style={headStyle}>Status</th>

            </tr>

          </thead>

          <tbody>

            {[
              ["Data Structures","3rd","62","Active"],
              ["Database Systems","4th","58","Active"],
              ["Machine Learning","5th","74","Active"],
              ["Artificial Intelligence","6th","55","Active"],
            ].map((item,index)=>(

              <tr key={index}>

                <td style={cellStyle}>{item[0]}</td>

                <td style={cellStyle}>{item[1]}</td>

                <td style={cellStyle}>{item[2]}</td>

                <td style={cellStyle}>

                  <span
                    style={{
                      background:"#16A34A",
                      color:"#ffffff",
                      padding:"7px 14px",
                      borderRadius:"20px",
                      fontSize:"13px",
                    }}
                  >
                    {item[3]}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
            {/* ===========================
          Recent Student Submissions & Announcements
      =========================== */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "35px",
        }}
      >

        {/* Recent Submissions */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Recent Student Submissions
          </h2>

          {[
            {
              name: "Rahul Sharma",
              assignment: "Machine Learning Assignment",
              time: "5 min ago",
            },
            {
              name: "Priya Das",
              assignment: "Database Lab Report",
              time: "18 min ago",
            },
            {
              name: "Amit Roy",
              assignment: "Data Structures Assignment",
              time: "42 min ago",
            },
            {
              name: "Sneha Paul",
              assignment: "AI Case Study",
              time: "1 hour ago",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F8FAFD",
                padding: "18px",
                borderRadius: "14px",
                marginBottom: "15px",
              }}
            >

              <div>

                <h3
                  style={{
                    margin: 0,
                    color: "#002B5B",
                  }}
                >
                  {item.name}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginTop: "8px",
                  }}
                >
                  {item.assignment}
                </p>

              </div>

              <div
                style={{
                  textAlign: "right",
                }}
              >

                <FaCheckCircle
                  color="#16A34A"
                  size={24}
                />

                <p
                  style={{
                    marginTop: "8px",
                    color: "#777",
                  }}
                >
                  {item.time}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Announcements */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "25px",
            }}
          >
            Recent Announcements
          </h2>

          {[
            "Semester Mid Examination starts from 20 July.",
            "Department Meeting at 3:00 PM tomorrow.",
            "Upload attendance before 5 PM.",
            "Project Review scheduled next Monday.",
            "AI Workshop registration now open.",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                background: "#F8FAFD",
                borderLeft: "5px solid #F4B400",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            >
              {item}
            </div>
          ))}

        </div>

      </div>

      {/* ===========================
          Footer
      =========================== */}

      <div
        style={{
          background: "#002B5B",
          color: "#ffffff",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
        }}
      >

        <h2
          style={{
            marginTop: 0,
          }}
        >
          Teacher Workspace
        </h2>

        <p
          style={{
            marginTop: "12px",
            color: "#E5E5E5",
            lineHeight: "28px",
          }}
        >
          Manage courses, students, assignments,
          announcements and academic activities from one
          centralized teaching dashboard.
        </p>

      </div>

    </div>
  );
};

const headStyle = {
  padding: "16px",
  textAlign: "center",
};

const cellStyle = {
  padding: "16px",
  textAlign: "center",
  borderBottom: "1px solid #EEEEEE",
};

export default TeacherDashboardContent;