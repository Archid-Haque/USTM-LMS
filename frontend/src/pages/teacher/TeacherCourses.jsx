import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";
import {
  FaBookOpen,
  FaUsers,
  FaClock,
  FaArrowRight,
  FaUpload,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

const TeacherCourses = () => {
  const courses = [
    {
      code: "CSE401",
      name: "Data Structures",
      students: 86,
      semester: "3rd Semester",
      progress: "78%",
      nextClass: "09:00 AM",
      color: "#2563EB",
    },
    {
      code: "CSE404",
      name: "Operating Systems",
      students: 72,
      semester: "4th Semester",
      progress: "61%",
      nextClass: "11:30 AM",
      color: "#10B981",
    },
    {
      code: "DS302",
      name: "Machine Learning",
      students: 54,
      semester: "5th Semester",
      progress: "43%",
      nextClass: "02:00 PM",
      color: "#F59E0B",
    },
    {
      code: "CSE305",
      name: "Database Management",
      students: 100,
      semester: "3rd Semester",
      progress: "82%",
      nextClass: "Tomorrow",
      color: "#EF4444",
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
            background: "#fff",
            borderRadius: "20px",
            padding: "35px",
            marginBottom: "30px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              color: "#002B5B",
              marginBottom: "12px",
            }}
          >
            📚 My Courses
          </h1>

          <p
            style={{
              color: "#666",
              fontSize: "17px",
            }}
          >
            Manage your subjects, upload study materials, monitor student
            progress and conduct classes from one place.
          </p>
        </div>

        {/* Stats */}

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
              icon: <FaBookOpen />,
              title: "Courses",
              value: "5",
              color: "#2563EB",
            },
            {
              icon: <FaUsers />,
              title: "Students",
              value: "312",
              color: "#10B981",
            },
            {
              icon: <FaClock />,
              title: "Today's Classes",
              value: "4",
              color: "#F59E0B",
            },
            {
              icon: <FaChartLine />,
              title: "Avg Progress",
              value: "74%",
              color: "#EF4444",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: "28px",
                  color: item.color,
                  marginBottom: "18px",
                }}
              >
                {item.icon}
              </div>

              <h2>{item.value}</h2>

              <p
                style={{
                  color: "#666",
                }}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Course Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: "25px",
          }}
        >
          {courses.map((course) => (
            <div
              key={course.code}
              style={{
                background: "#fff",
                borderRadius: "18px",
                padding: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h2
                    style={{
                      color: "#002B5B",
                    }}
                  >
                    {course.name}
                  </h2>

                  <p style={{ color: "#666" }}>
                    {course.code} • {course.semester}
                  </p>
                </div>

                <div
                  style={{
                    background: course.color,
                    color: "#fff",
                    padding: "8px 15px",
                    borderRadius: "25px",
                    height: "fit-content",
                  }}
                >
                  {course.progress}
                </div>
              </div>

              <hr
                style={{
                  margin: "20px 0",
                  border: "none",
                  borderTop: "1px solid #eee",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "18px",
                }}
              >
                <span>👨‍🎓 {course.students} Students</span>

                <span>🕘 {course.nextClass}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  style={{
                    background: "#2563EB",
                    color: "#fff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FaUpload /> Upload Notes
                </button>

                <button
                  style={{
                    background: "#10B981",
                    color: "#fff",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FaClipboardList /> Assignments
                </button>

                <button
                  style={{
                    background: "#F4B400",
                    color: "#002B5B",
                    border: "none",
                    padding: "10px 16px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                  }}
                >
                  View Details <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherCourses;