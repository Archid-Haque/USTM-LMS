import React from "react";
import {
  FaClipboardCheck,
  FaClock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaSearch,
  FaPlus,
  FaEye,
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

const trendData = [
  { month: "Jan", submissions: 110 },
  { month: "Feb", submissions: 165 },
  { month: "Mar", submissions: 210 },
  { month: "Apr", submissions: 260 },
  { month: "May", submissions: 340 },
  { month: "Jun", submissions: 420 },
  { month: "Jul", submissions: 515 },
];

const pieData = [
  {
    name: "Submitted",
    value: 72,
  },
  {
    name: "Pending",
    value: 18,
  },
  {
    name: "Late",
    value: 10,
  },
];

const COLORS = [
  "#198754",
  "#F4B400",
  "#DC3545",
];

const recentAssignments = [
  {
    title: "Database Management Lab",
    department: "Computer Science",
    submissions: "94%",
  },
  {
    title: "Machine Learning Project",
    department: "Data Science",
    submissions: "87%",
  },
  {
    title: "Structural Analysis",
    department: "Civil Engineering",
    submissions: "81%",
  },
  {
    title: "Clinical Pharmacy",
    department: "Pharmacy",
    submissions: "92%",
  },
  {
    title: "Marketing Strategy",
    department: "Management",
    submissions: "76%",
  },
];

const pendingReviews = [
  {
    student: "Rahul Sharma",
    assignment: "ML Report",
    date: "Today",
  },
  {
    student: "Priya Das",
    assignment: "DBMS Lab",
    date: "Yesterday",
  },
  {
    student: "Aman Singh",
    assignment: "AI Assignment",
    date: "2 Days Ago",
  },
  {
    student: "Neha Roy",
    assignment: "Python Project",
    date: "Today",
  },
];

const AssignmentsDashboard = () => {
  return (
    <div>

      {/* Top Controls */}

      <div
        style={{
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
            background: "#ffffff",
            padding: "14px 18px",
            borderRadius: "15px",
            width: "350px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
          }}
        >

          <FaSearch color="#777" />

          <input
            placeholder="Search Assignment..."
            style={{
              border: "none",
              outline: "none",
              marginLeft: "12px",
              width: "100%",
              fontSize: "16px",
            }}
          />

        </div>

        <button
          style={{
            background: "#F4B400",
            color: "#002B5B",
            border: "none",
            padding: "15px 28px",
            borderRadius: "14px",
            fontWeight: "700",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "16px",
          }}
        >

          <FaPlus />

          Add Assignment

        </button>

      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "22px",
          marginBottom: "35px",
        }}
      >

        <div style={cardStyle}>
          <FaClipboardCheck
            size={34}
            color="#002B5B"
          />

          <h2
            style={{
              margin: "12px 0 5px",
            }}
          >
            132
          </h2>

          <p>Total Assignments</p>

        </div>

        <div style={cardStyle}>
          <FaCheckCircle
            size={34}
            color="#198754"
          />

          <h2
            style={{
              margin: "12px 0 5px",
            }}
          >
            97
          </h2>

          <p>Successfully Submitted</p>

        </div>

        <div style={cardStyle}>
          <FaClock
            size={34}
            color="#F4B400"
          />

          <h2
            style={{
              margin: "12px 0 5px",
            }}
          >
            18
          </h2>

          <p>Pending Review</p>

        </div>

        <div style={cardStyle}>
          <FaExclamationTriangle
            size={34}
            color="#DC3545"
          />

          <h2
            style={{
              margin: "12px 0 5px",
            }}
          >
            17
          </h2>

          <p>Late Submission</p>

        </div>

      </div>

      {/* Charts */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            height: "430px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "6px",
            }}
          >
            Assignment Submission Trend
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Monthly assignment submission activity
          </p>

          <ResponsiveContainer
            width="100%"
            height="82%"
          >

            <LineChart
              data={trendData}
            >

              <CartesianGrid
                strokeDasharray="5 5"
              />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="submissions"
                stroke="#002B5B"
                strokeWidth={4}
                dot={{
                  fill: "#F4B400",
                  r: 6,
                }}
              />
                          </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Pie Chart */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            height: "430px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "6px",
            }}
          >
            Submission Status
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Overall assignment completion
          </p>

          <ResponsiveContainer
            width="100%"
            height="75%"
          >

            <PieChart>

              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={110}
                label
              >

                {pieData.map((entry, index) => (
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

      {/* Bottom Section */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: "25px",
          marginTop: "30px",
        }}
      >

        {/* Recent Assignments */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "20px",
            }}
          >
            Recent Assignments
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

                <th style={headStyle}>
                  Assignment
                </th>

                <th style={headStyle}>
                  Department
                </th>

                <th style={headStyle}>
                  Submitted
                </th>

                <th style={headStyle}>
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {recentAssignments.map((item, index) => (

                <tr key={index}>

                  <td style={cellStyle}>
                    {item.title}
                  </td>

                  <td style={cellStyle}>
                    {item.department}
                  </td>

                  <td style={cellStyle}>

                    <span
                      style={{
                        background: "#198754",
                        color: "#fff",
                        padding: "7px 14px",
                        borderRadius: "18px",
                        fontSize: "14px",
                      }}
                    >
                      {item.submissions}
                    </span>

                  </td>

                  <td style={cellStyle}>

                    <FaEye
                      color="#002B5B"
                      style={{
                        cursor: "pointer",
                      }}
                    />

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Pending Reviews */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
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

          {pendingReviews.map((review, index) => (

            <div
              key={index}
              style={{
                padding: "18px",
                marginBottom: "15px",
                borderRadius: "15px",
                background: "#F4F7FC",
                borderLeft: "5px solid #F4B400",
              }}
            >

              <h4
                style={{
                  margin: 0,
                  color: "#002B5B",
                }}
              >
                {review.student}
              </h4>

              <p
                style={{
                  margin: "6px 0",
                  color: "#666",
                }}
              >
                {review.assignment}
              </p>

              <small
                style={{
                  color: "#999",
                }}
              >
                Submitted : {review.date}
              </small>

            </div>

          ))}
                  </div>

      </div>

      {/* Bottom Summary */}

      <div
        style={{
          marginTop: "30px",
          background: "#ffffff",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >

        <div>

          <h2
            style={{
              margin: 0,
              color: "#002B5B",
            }}
          >
            Overall Assignment Health
          </h2>

          <p
            style={{
              color: "#666",
              marginTop: "8px",
            }}
          >
            72% assignments have been submitted successfully.
            Keep monitoring pending reviews and overdue submissions.
          </p>

        </div>

        <button
          style={{
            background: "#002B5B",
            color: "#ffffff",
            border: "none",
            padding: "15px 28px",
            borderRadius: "14px",
            cursor: "pointer",
            fontWeight: "700",
            fontSize: "16px",
          }}
        >
          View Full Report
        </button>

      </div>

    </div>
  );
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "18px",
  padding: "25px",
  textAlign: "center",
  boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
};

const headStyle = {
  padding: "16px",
  textAlign: "center",
  fontSize: "16px",
};

const cellStyle = {
  padding: "16px",
  textAlign: "center",
  borderBottom: "1px solid #EEEEEE",
  fontSize: "15px",
};

export default AssignmentsDashboard;