import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";

import {
  FaCalendarCheck,
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaSearch,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const attendanceData = [
  {
    name: "Present",
    value: 82,
  },
  {
    name: "Absent",
    value: 12,
  },
  {
    name: "Leave",
    value: 6,
  },
];

const COLORS = [
  "#16A34A",
  "#EF4444",
  "#F59E0B",
];

const weeklyAttendance = [
  { day: "Mon", attendance: 91 },
  { day: "Tue", attendance: 87 },
  { day: "Wed", attendance: 94 },
  { day: "Thu", attendance: 89 },
  { day: "Fri", attendance: 92 },
  { day: "Sat", attendance: 85 },
];

const students = [
  {
    roll: "DS001",
    name: "Rahul Sharma",
    course: "Machine Learning",
    status: "Present",
  },
  {
    roll: "DS002",
    name: "Priya Das",
    course: "Machine Learning",
    status: "Absent",
  },
  {
    roll: "DS003",
    name: "Amit Roy",
    course: "Data Structures",
    status: "Present",
  },
  {
    roll: "DS004",
    name: "Sneha Paul",
    course: "Database Systems",
    status: "Present",
  },
];

const TeacherAttendance = () => {
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
            Attendance Management
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            Monitor daily attendance, identify absentees and
            track classroom participation in real time.
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
              title: "Present Today",
              value: "256",
              icon: <FaUserCheck />,
              color: "#16A34A",
            },
            {
              title: "Absent",
              value: "38",
              icon: <FaUserTimes />,
              color: "#EF4444",
            },
            {
              title: "Attendance",
              value: "89%",
              icon: <FaCalendarCheck />,
              color: "#2563EB",
            },
            {
              title: "Pending",
              value: "18",
              icon: <FaClock />,
              color: "#F59E0B",
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
                  fontSize: "30px",
                  color: card.color,
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
                {/* Charts Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Weekly Attendance */}

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
                marginBottom: "8px",
              }}
            >
              Weekly Attendance Trend
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              Overall classroom attendance during this week
            </p>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <LineChart
                data={weeklyAttendance}
              >

                <CartesianGrid strokeDasharray="5 5" />

                <XAxis dataKey="day" />

                <YAxis domain={[70, 100]} />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="attendance"
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

          {/* Attendance Pie */}

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
                marginBottom: "8px",
              }}
            >
              Today's Attendance
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              Present vs Absent overview
            </p>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <PieChart>

                <Pie
                  data={attendanceData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                  label
                >

                  {attendanceData.map((entry, index) => (

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

        {/* Today's Classes */}

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
            Today's Classes
          </h2>

          {[
            {
              course: "Machine Learning",
              room: "Lab-2",
              time: "09:00 - 10:30",
            },
            {
              course: "Data Structures",
              room: "Room-302",
              time: "11:00 - 12:00",
            },
            {
              course: "Database Systems",
              room: "Room-205",
              time: "02:00 - 03:00",
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
                  {item.course}
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginTop: "8px",
                  }}
                >
                  {item.room}
                </p>

              </div>

              <div
                style={{
                  color: "#F59E0B",
                  fontWeight: "600",
                }}
              >
                {item.time}
              </div>

            </div>

          ))}

        </div>
                {/* Search & Attendance Table */}

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
                placeholder="Search Student..."
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
                padding: "14px 22px",
                borderRadius: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "600",
              }}
            >

              <FaCheckCircle />

              Mark Attendance

            </button>

          </div>

          {/* Attendance Table */}

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

                <th style={headStyle}>Roll No</th>
                <th style={headStyle}>Student</th>
                <th style={headStyle}>Course</th>
                <th style={headStyle}>Status</th>
                <th style={headStyle}>Action</th>

              </tr>

            </thead>

            <tbody>

              {students.map((student,index)=>(

                <tr key={index}>

                  <td style={cellStyle}>
                    {student.roll}
                  </td>

                  <td style={cellStyle}>
                    {student.name}
                  </td>

                  <td style={cellStyle}>
                    {student.course}
                  </td>

                  <td style={cellStyle}>

                    <span
                      style={{
                        background:
                          student.status==="Present"
                            ? "#16A34A"
                            : "#EF4444",

                        color:"#ffffff",
                        padding:"8px 16px",
                        borderRadius:"20px",
                        fontSize:"13px",
                      }}
                    >
                      {student.status}
                    </span>

                  </td>

                  <td style={cellStyle}>

                    <button
                      style={{
                        background:"#002B5B",
                        color:"#ffffff",
                        border:"none",
                        padding:"9px 16px",
                        borderRadius:"8px",
                        cursor:"pointer",
                      }}
                    >
                      Update
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
                {/* Bottom Summary */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginTop: "30px",
          }}
        >

          {/* Attendance Summary */}

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
              Monthly Attendance Summary
            </h2>

            {[
              {
                title: "Average Attendance",
                value: "89%",
                color: "#16A34A",
              },
              {
                title: "Best Performing Class",
                value: "Machine Learning",
                color: "#2563EB",
              },
              {
                title: "Students Below 75%",
                value: "12 Students",
                color: "#EF4444",
              },
            ].map((item,index)=>(

              <div
                key={index}
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center",
                  background:"#F8FAFD",
                  padding:"16px",
                  borderRadius:"12px",
                  marginBottom:"15px",
                }}
              >

                <span
                  style={{
                    color:"#555",
                    fontWeight:"500",
                  }}
                >
                  {item.title}
                </span>

                <span
                  style={{
                    color:item.color,
                    fontWeight:"700",
                  }}
                >
                  {item.value}
                </span>

              </div>

            ))}

          </div>

          {/* Attendance Insights */}

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
              Attendance Insights
            </h2>

            {[
              "Overall attendance improved by 4% compared to last month.",
              "Machine Learning has the highest attendance rate (96%).",
              "12 students require attendance counselling.",
              "Friday recorded the highest attendance this week.",
              "Attendance records have been updated successfully.",
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
            marginTop:"35px",
            background:"#002B5B",
            color:"#ffffff",
            padding:"30px",
            borderRadius:"20px",
            textAlign:"center",
          }}
        >

          <h2
            style={{
              marginTop:0,
            }}
          >
            Attendance Management Center
          </h2>

          <p
            style={{
              color:"#E5E7EB",
              marginTop:"12px",
              lineHeight:"28px",
            }}
          >
            Track classroom attendance, monitor participation,
            identify students requiring support and maintain
            accurate attendance records for every course.
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

export default TeacherAttendance;