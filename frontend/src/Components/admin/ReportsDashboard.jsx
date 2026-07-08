import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  FaSearch,
  FaDownload,
  FaFilter,
  FaUsers,
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

const lineData = [
  { month: "Jan", students: 1040 },
  { month: "Feb", students: 1085 },
  { month: "Mar", students: 1118 },
  { month: "Apr", students: 1164 },
  { month: "May", students: 1202 },
  { month: "Jun", students: 1228 },
  { month: "Jul", students: 1245 },
];

const pieData = [
  { name: "Engineering", value: 38 },
  { name: "Management", value: 20 },
  { name: "Science", value: 15 },
  { name: "Pharmacy", value: 14 },
  { name: "Medical", value: 13 },
];

const COLORS = [
  "#002B5B",
  "#0D6EFD",
  "#198754",
  "#F4B400",
  "#DC3545",
];

const ReportsDashboard = () => {
  return (
    <div>

      {/* Top Controls */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >

        {/* Search */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#ffffff",
            padding: "14px 18px",
            borderRadius: "15px",
            boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
            minWidth: "380px",
          }}
        >
          <FaSearch color="#888" />

          <input
            type="text"
            placeholder="Search reports..."
            style={{
              border: "none",
              outline: "none",
              marginLeft: "12px",
              width: "100%",
              fontSize: "16px",
              background: "transparent",
            }}
          />
        </div>

        {/* Controls */}

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >

          <button
            style={buttonBlue}
          >
            <FaFilter />
            Filter
          </button>

          <button
            style={buttonYellow}
          >
            <FaDownload />
            Generate Report
          </button>

        </div>

      </div>

      {/* KPI Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "22px",
          marginBottom: "30px",
        }}
      >

        <div style={cardStyle}>
          <FaUsers
            size={35}
            color="#002B5B"
          />
          <h2>1245</h2>
          <p>Total Students</p>
        </div>

        <div style={cardStyle}>
          <FaChalkboardTeacher
            size={35}
            color="#198754"
          />
          <h2>86</h2>
          <p>Faculty Members</p>
        </div>

        <div style={cardStyle}>
          <FaBookOpen
            size={35}
            color="#F4B400"
          />
          <h2>52</h2>
          <p>Courses Running</p>
        </div>

        <div style={cardStyle}>
          <FaClipboardCheck
            size={35}
            color="#0D6EFD"
          />
          <h2>978</h2>
          <p>Assignments Submitted</p>
        </div>

        <div style={cardStyle}>
          <FaCalendarCheck
            size={35}
            color="#198754"
          />
          <h2>91%</h2>
          <p>Average Attendance</p>
        </div>

        <div style={cardStyle}>
          <FaChartLine
            size={35}
            color="#DC3545"
          />
          <h2>87%</h2>
          <p>Placement Rate</p>
        </div>

      </div>
            {/* Executive Analytics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "30px",
        }}
      >

        {/* Student Growth */}

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
              marginBottom: "5px",
            }}
          >
            Student Growth Trend
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Total enrolled students across the university
          </p>

          <ResponsiveContainer
            width="100%"
            height="80%"
          >

            <LineChart data={lineData}>

              <CartesianGrid strokeDasharray="4 4" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="students"
                stroke="#002B5B"
                strokeWidth={4}
                dot={{
                  r: 6,
                  fill: "#F4B400",
                }}
                activeDot={{
                  r: 8,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* Department Distribution */}

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
              marginBottom: "5px",
            }}
          >
            Department Distribution
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Students across faculties
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

      {/* Department Performance */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          padding: "25px",
          marginBottom: "30px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          height: "450px",
        }}
      >

        <h2
          style={{
            color: "#002B5B",
            marginBottom: "5px",
          }}
        >
          Department-wise Academic Performance
        </h2>

        <p
          style={{
            color: "#777",
            marginBottom: "25px",
          }}
        >
          Average CGPA comparison across departments
        </p>

        <ResponsiveContainer
          width="100%"
          height="80%"
        >

          <BarChart
            data={[
              { dept: "CSE", cgpa: 8.8 },
              { dept: "DS", cgpa: 8.6 },
              { dept: "Civil", cgpa: 8.1 },
              { dept: "Management", cgpa: 8.3 },
              { dept: "Pharmacy", cgpa: 8.7 },
              { dept: "Medical", cgpa: 8.9 },
            ]}
          >

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis dataKey="dept" />

            <YAxis domain={[7.5, 9.5]} />

            <Tooltip />

            <Bar
              dataKey="cgpa"
              fill="#002B5B"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>
            {/* Attendance & Assignment Analytics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "30px",
        }}
      >

        {/* Attendance Trend */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            height: "420px",
          }}
        >

          <h2
            style={{
              color: "#002B5B",
              marginBottom: "5px",
            }}
          >
            Attendance Analytics
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "20px",
            }}
          >
            Monthly university attendance percentage
          </p>

          <ResponsiveContainer
            width="100%"
            height="80%"
          >

            <AreaChart
              data={[
                { month: "Jan", attendance: 84 },
                { month: "Feb", attendance: 86 },
                { month: "Mar", attendance: 88 },
                { month: "Apr", attendance: 90 },
                { month: "May", attendance: 91 },
                { month: "Jun", attendance: 93 },
                { month: "Jul", attendance: 92 },
              ]}
            >

              <CartesianGrid strokeDasharray="4 4" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="attendance"
                stroke="#002B5B"
                fill="#BFD7FF"
                strokeWidth={3}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* Assignment Completion */}

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
            }}
          >
            Assignment Completion
          </h2>

          <p
            style={{
              color: "#777",
              marginBottom: "25px",
            }}
          >
            Department-wise completion
          </p>

          {[
            ["Computer Science",94],
            ["Data Science",91],
            ["Management",88],
            ["Civil Engineering",74],
            ["Pharmacy",97],
            ["Medical",95],
          ].map(([dept,value],index)=>(
            <div
              key={index}
              style={{
                marginBottom:"22px",
              }}
            >

              <div
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  marginBottom:"8px",
                  color:"#002B5B",
                  fontWeight:"600",
                }}
              >

                <span>{dept}</span>

                <span>{value}%</span>

              </div>

              <div
                style={{
                  width:"100%",
                  height:"10px",
                  background:"#E9ECEF",
                  borderRadius:"10px",
                }}
              >

                <div
                  style={{
                    width:`${value}%`,
                    height:"100%",
                    background:"#002B5B",
                    borderRadius:"10px",
                  }}
                />

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Executive Summary */}

      <div
        style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
          gap:"22px",
          marginBottom:"30px",
        }}
      >

        <div style={cardStyle}>
          <h3
            style={{
              color:"#002B5B",
              marginBottom:"10px",
            }}
          >
            Academic Excellence
          </h3>

          <h1
            style={{
              color:"#198754",
              margin:"0",
            }}
          >
            8.62 CGPA
          </h1>

          <p>University Average</p>

        </div>

        <div style={cardStyle}>

          <h3
            style={{
              color:"#002B5B",
              marginBottom:"10px",
            }}
          >
            Placement Success
          </h3>

          <h1
            style={{
              color:"#0D6EFD",
              margin:"0",
            }}
          >
            87%
          </h1>

          <p>Eligible Students Placed</p>

        </div>

        <div style={cardStyle}>

          <h3
            style={{
              color:"#002B5B",
              marginBottom:"10px",
            }}
          >
            Research Publications
          </h3>

          <h1
            style={{
              color:"#F4B400",
              margin:"0",
            }}
          >
            142
          </h1>

          <p>Current Academic Year</p>

        </div>

        <div style={cardStyle}>

          <h3
            style={{
              color:"#002B5B",
              marginBottom:"10px",
            }}
          >
            University Rating
          </h3>

          <h1
            style={{
              color:"#DC3545",
              margin:"0",
            }}
          >
            A+
          </h1>

          <p>Overall Performance Index</p>

        </div>

      </div>
            {/* Recent Reports & System Health */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
          marginBottom: "30px",
        }}
      >

        {/* Recent Reports */}

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
            Recently Generated Reports
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

                <th style={headStyle}>Report</th>
                <th style={headStyle}>Generated By</th>
                <th style={headStyle}>Date</th>
                <th style={headStyle}>Status</th>

              </tr>

            </thead>

            <tbody>

              {[
                {
                  report:"Student Performance",
                  by:"Administrator",
                  date:"Today",
                  status:"Completed",
                },
                {
                  report:"Attendance Report",
                  by:"Dean",
                  date:"Yesterday",
                  status:"Completed",
                },
                {
                  report:"Placement Report",
                  by:"Training Cell",
                  date:"07 Jul",
                  status:"Processing",
                },
                {
                  report:"Assignment Analytics",
                  by:"Academic Office",
                  date:"06 Jul",
                  status:"Completed",
                },
              ].map((item,index)=>(

                <tr key={index}>

                  <td style={cellStyle}>{item.report}</td>

                  <td style={cellStyle}>{item.by}</td>

                  <td style={cellStyle}>{item.date}</td>

                  <td style={cellStyle}>

                    <span
                      style={{
                        background:
                          item.status==="Completed"
                            ? "#198754"
                            : "#F4B400",
                        color:"#ffffff",
                        padding:"7px 15px",
                        borderRadius:"20px",
                        fontSize:"13px",
                        fontWeight:"600",
                      }}
                    >
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Live System Health */}

        <div
          style={{
            background:"#ffffff",
            borderRadius:"20px",
            padding:"25px",
            boxShadow:"0 8px 20px rgba(0,0,0,0.08)",
          }}
        >

          <h2
            style={{
              color:"#002B5B",
              marginBottom:"20px",
            }}
          >
            Live System Health
          </h2>

          {[
            ["Server Status","99.98%","#198754"],
            ["Database","Healthy","#198754"],
            ["Storage","72% Used","#F4B400"],
            ["CPU Usage","41%","#0D6EFD"],
            ["Active Users","612","#002B5B"],
            ["Security","Protected","#198754"],
          ].map(([title,value,color],index)=>(

            <div
              key={index}
              style={{
                display:"flex",
                justifyContent:"space-between",
                marginBottom:"18px",
                paddingBottom:"12px",
                borderBottom:"1px solid #EEEEEE",
              }}
            >

              <span
                style={{
                  color:"#555",
                }}
              >
                {title}
              </span>

              <strong
                style={{
                  color:color,
                }}
              >
                {value}
              </strong>

            </div>

          ))}

        </div>

      </div>

      {/* University Health Summary */}

      <div
        style={{
          background:"#002B5B",
          color:"#ffffff",
          borderRadius:"22px",
          padding:"35px",
          boxShadow:"0 12px 30px rgba(0,0,0,0.15)",
        }}
      >

        <h2
          style={{
            marginTop:0,
            marginBottom:"18px",
          }}
        >
          University Executive Summary
        </h2>

        <p
          style={{
            lineHeight:"32px",
            fontSize:"17px",
            color:"#F4F4F4",
          }}
        >
          Academic performance across USTM remains strong with
          consistent student growth, excellent attendance,
          increasing assignment completion and healthy faculty
          engagement. Placement statistics continue to improve,
          while overall LMS activity indicates high student
          participation throughout the semester.
        </p>

        <div
          style={{
            marginTop:"25px",
            display:"flex",
            flexWrap:"wrap",
            gap:"15px",
          }}
        >

          <button style={buttonYellow}>
            Download Full Report
          </button>

          <button style={buttonBlue}>
            Generate New Analytics
          </button>

        </div>

      </div>

    </div>
  );
};

const cardStyle = {
  background:"#ffffff",
  padding:"25px",
  borderRadius:"18px",
  textAlign:"center",
  boxShadow:"0 8px 20px rgba(0,0,0,0.08)",
};

const buttonBlue = {
  background:"#002B5B",
  color:"#ffffff",
  border:"none",
  padding:"14px 24px",
  borderRadius:"12px",
  cursor:"pointer",
  display:"flex",
  alignItems:"center",
  gap:"10px",
  fontWeight:"600",
};

const buttonYellow = {
  background:"#F4B400",
  color:"#002B5B",
  border:"none",
  padding:"14px 24px",
  borderRadius:"12px",
  cursor:"pointer",
  display:"flex",
  alignItems:"center",
  gap:"10px",
  fontWeight:"700",
};

const headStyle = {
  padding:"16px",
  textAlign:"center",
};

const cellStyle = {
  padding:"16px",
  textAlign:"center",
  borderBottom:"1px solid #EEEEEE",
};

export default ReportsDashboard;