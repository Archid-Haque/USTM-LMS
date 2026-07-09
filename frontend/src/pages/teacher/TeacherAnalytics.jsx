import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";

import {
  FaChartLine,
  FaUserGraduate,
  FaBookOpen,
  FaClipboardCheck,
  FaAward,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const performanceData = [
  { month: "Jan", score: 71 },
  { month: "Feb", score: 74 },
  { month: "Mar", score: 77 },
  { month: "Apr", score: 82 },
  { month: "May", score: 85 },
  { month: "Jun", score: 91 },
];

const submissionData = [
  {
    course: "DS",
    completed: 94,
  },
  {
    course: "ML",
    completed: 87,
  },
  {
    course: "DBMS",
    completed: 98,
  },
  {
    course: "OS",
    completed: 81,
  },
];

const attendanceData = [
  {
    week: "W1",
    value: 82,
  },
  {
    week: "W2",
    value: 86,
  },
  {
    week: "W3",
    value: 90,
  },
  {
    week: "W4",
    value: 93,
  },
];

const pieData = [
  {
    name: "Machine Learning",
    value: 30,
  },
  {
    name: "DBMS",
    value: 25,
  },
  {
    name: "DS",
    value: 20,
  },
  {
    name: "OS",
    value: 25,
  },
];

const COLORS = [
  "#002B5B",
  "#2563EB",
  "#F4B400",
  "#16A34A",
];

const TeacherAnalytics = () => {

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
            marginBottom: "30px",
            boxShadow: "0 8px 20px rgba(0,0,0,.08)",
          }}
        >

          <h1
            style={{
              color: "#002B5B",
              marginBottom: "10px",
            }}
          >
            Teaching Analytics
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            Analyze classroom performance, attendance,
            assignment completion and student engagement.
          </p>

        </div>

        {/* KPI Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px",
            marginBottom: "35px",
          }}
        >

          {[
            {
              title: "Students",
              value: "312",
              icon: <FaUserGraduate />,
              color: "#2563EB",
            },
            {
              title: "Courses",
              value: "5",
              icon: <FaBookOpen />,
              color: "#16A34A",
            },
            {
              title: "Assignments",
              value: "28",
              icon: <FaClipboardCheck />,
              color: "#F4B400",
            },
            {
              title: "Average Score",
              value: "89%",
              icon: <FaChartLine />,
              color: "#EF4444",
            },
            {
              title: "Top Rating",
              value: "4.9",
              icon: <FaAward />,
              color: "#8B5CF6",
            },
          ].map((item,index)=>(

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
                  color:item.color,
                  fontSize:"30px",
                  marginBottom:"18px",
                }}
              >
                {item.icon}
              </div>

              <h2>{item.value}</h2>

              <p
                style={{
                  color:"#666",
                }}
              >
                {item.title}
              </p>

            </div>

          ))}

        </div>
                {/* Charts */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Student Performance */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              height: "430px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "8px",
              }}
            >
              Student Performance Trend
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              Average class performance over the last six months
            </p>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <LineChart data={performanceData}>

                <CartesianGrid strokeDasharray="4 4" />

                <XAxis dataKey="month" />

                <YAxis />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
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

          {/* Course Distribution */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              height: "430px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "8px",
              }}
            >
              Course Distribution
            </h2>

            <p
              style={{
                color: "#666",
                marginBottom: "20px",
              }}
            >
              Student allocation by subject
            </p>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <PieChart>

                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
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

        {/* Assignment & Attendance */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Assignment Submission */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              height: "420px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "20px",
              }}
            >
              Assignment Submission Rate
            </h2>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <BarChart
                data={submissionData}
              >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="course" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="completed"
                  fill="#2563EB"
                  radius={[8,8,0,0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* Attendance Trend */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
              height: "420px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "20px",
              }}
            >
              Weekly Attendance Trend
            </h2>

            <ResponsiveContainer
              width="100%"
              height="80%"
            >

              <AreaChart
                data={attendanceData}
              >

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="week" />

                <YAxis />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#16A34A"
                  fill="#A7F3D0"
                  strokeWidth={3}
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </div>
                {/* Insights Dashboard */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Performance Insights */}

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
              Performance Insights
            </h2>

            {[
              {
                title: "Best Performing Course",
                value: "Database Systems (98%)",
                color: "#16A34A",
              },
              {
                title: "Needs Improvement",
                value: "Operating Systems (81%)",
                color: "#EF4444",
              },
              {
                title: "Highest Attendance",
                value: "Machine Learning (96%)",
                color: "#2563EB",
              },
              {
                title: "Average Assignment Score",
                value: "89 / 100",
                color: "#F4B400",
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
                    fontWeight:"600",
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

          {/* Semester Summary */}

          <div
            style={{
              background:"#ffffff",
              borderRadius:"20px",
              padding:"30px",
              boxShadow:"0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color:"#002B5B",
                marginBottom:"25px",
              }}
            >
              Semester Summary
            </h2>

            {[
              "312 students enrolled across all courses.",
              "Overall attendance increased by 6% this semester.",
              "94% assignments submitted before deadlines.",
              "Student engagement improved by 11%.",
              "Teaching feedback rating: ⭐ 4.9 / 5.",
            ].map((item,index)=>(

              <div
                key={index}
                style={{
                  padding:"15px",
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

        {/* AI Recommendations */}

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
            Teaching Recommendations
          </h2>

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(3,1fr)",
              gap:"20px",
            }}
          >

            {[
              {
                title:"Increase Practical Sessions",
                desc:"Machine Learning students perform better after additional lab practice.",
              },
              {
                title:"Support Weak Students",
                desc:"12 students have attendance below 75% and need mentoring.",
              },
              {
                title:"Assignment Quality",
                desc:"Database assignments have the highest submission and completion rate.",
              },
            ].map((card,index)=>(

              <div
                key={index}
                style={{
                  background:"#F8FAFD",
                  borderRadius:"16px",
                  padding:"22px",
                }}
              >

                <h3
                  style={{
                    color:"#002B5B",
                    marginBottom:"12px",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    color:"#666",
                    lineHeight:"26px",
                  }}
                >
                  {card.desc}
                </p>

              </div>

            ))}

          </div>

        </div>
                {/* Teaching Effectiveness */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Overall Score */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              textAlign: "center",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "20px",
              }}
            >
              Overall Teaching Effectiveness
            </h2>

            <div
              style={{
                fontSize: "64px",
                fontWeight: "700",
                color: "#16A34A",
              }}
            >
              94%
            </div>

            <p
              style={{
                color: "#666",
                marginTop: "15px",
                lineHeight: "28px",
              }}
            >
              Based on attendance, assignment completion,
              student feedback and classroom engagement.
            </p>

          </div>

          {/* Faculty Achievements */}

          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "35px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
            }}
          >

            <h2
              style={{
                color: "#002B5B",
                marginBottom: "25px",
              }}
            >
              Faculty Highlights
            </h2>

            {[
              "⭐ Teaching Rating: 4.9 / 5",
              "🏆 Best Performing Course: Database Systems",
              "📚 94% Assignment Completion",
              "👨‍🎓 312 Students Managed",
              "📈 6% Attendance Improvement",
            ].map((item,index)=>(

              <div
                key={index}
                style={{
                  background:"#F8FAFD",
                  padding:"16px",
                  borderRadius:"12px",
                  marginBottom:"15px",
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
            Teacher Analytics Center
          </h2>

          <p
            style={{
              color:"#E5E7EB",
              marginTop:"12px",
              lineHeight:"28px",
            }}
          >
            Monitor academic performance, identify trends,
            evaluate classroom engagement and make
            data-driven teaching decisions through a
            centralized analytics dashboard.
          </p>

        </div>

      </div>

    </div>
  );
};

export default TeacherAnalytics;