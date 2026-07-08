import React from "react";
import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const courses = [
  {
    code: "CSE401",
    name: "Data Structures",
    department: "Computer Science",
    semester: "3rd",
    credits: 4,
    faculty: "Dr. Amit Sharma",
    students: 86,
    status: "Active",
  },
  {
    code: "DS302",
    name: "Machine Learning",
    department: "Data Science",
    semester: "5th",
    credits: 4,
    faculty: "Dr. Riya Das",
    students: 72,
    status: "Active",
  },
  {
    code: "CE205",
    name: "Structural Analysis",
    department: "Civil Engineering",
    semester: "4th",
    credits: 3,
    faculty: "Prof. Anil Roy",
    students: 58,
    status: "Inactive",
  },
  {
    code: "PH401",
    name: "Clinical Pharmacy",
    department: "Pharmacy",
    semester: "6th",
    credits: 4,
    faculty: "Dr. Neha Ahmed",
    students: 64,
    status: "Active",
  },
  {
    code: "MBA201",
    name: "Marketing Management",
    department: "Management",
    semester: "2nd",
    credits: 3,
    faculty: "Dr. Aditya Paul",
    students: 91,
    status: "Active",
  },
];

const CoursesTable = () => {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "22px",
        padding: "30px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      {/* Top Controls */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#F3F6FB",
              padding: "15px 20px",
              borderRadius: "14px",
              width: "360px",
            }}
          >
            <FaSearch color="#777" />

            <input
              placeholder="Search Course..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                marginLeft: "12px",
                width: "100%",
                fontSize: "17px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
            }}
          >
            <select
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <option>All Departments</option>
            </select>

            <select
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <option>Semester</option>
            </select>

            <select
              style={{
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #ddd",
                fontSize: "16px",
              }}
            >
              <option>Status</option>
            </select>
          </div>
        </div>

        <button
          style={{
            background: "#F4B400",
            color: "#002B5B",
            border: "none",
            padding: "18px 30px",
            borderRadius: "16px",
            fontWeight: "700",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            cursor: "pointer",
            height: "60px",
          }}
        >
          <FaPlus />
          Add Course
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
              color: "white",
            }}
          >
            <th style={head}>Code</th>
            <th style={head}>Course Name</th>
            <th style={head}>Department</th>
            <th style={head}>Semester</th>
            <th style={head}>Credits</th>
            <th style={head}>Faculty</th>
            <th style={head}>Students</th>
            <th style={head}>Status</th>
            <th style={head}>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td style={cell}>{course.code}</td>
              <td style={cell}>{course.name}</td>
              <td style={cell}>{course.department}</td>
              <td style={cell}>{course.semester}</td>
              <td style={cell}>{course.credits}</td>
              <td style={cell}>{course.faculty}</td>
              <td style={cell}>{course.students}</td>

              <td style={cell}>
                <span
                  style={{
                    background:
                      course.status === "Active"
                        ? "#1E9E59"
                        : "#E63946",
                    color: "white",
                    padding: "8px 18px",
                    borderRadius: "20px",
                    fontWeight: "600",
                  }}
                >
                  {course.status}
                </span>
              </td>

              <td style={cell}>
                <FaEye
                  color="#0D6EFD"
                  style={{ cursor: "pointer", marginRight: "12px" }}
                />

                <FaEdit
                  color="#198754"
                  style={{ cursor: "pointer", marginRight: "12px" }}
                />

                <FaTrash color="#DC3545" style={{ cursor: "pointer" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
          color: "#666",
          fontSize: "18px",
        }}
      >
        <span>Showing 1–5 of 52 Courses</span>

        <div>
          Previous&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;3&nbsp;&nbsp;Next
        </div>
      </div>
    </div>
  );
};

const head = {
  padding: "18px",
  textAlign: "center",
  fontSize: "18px",
};

const cell = {
  padding: "18px",
  borderBottom: "1px solid #EAEAEA",
  textAlign: "center",
  fontSize: "17px",
};

export default CoursesTable;