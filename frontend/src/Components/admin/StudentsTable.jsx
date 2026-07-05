import React from "react";
import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const students = [
  {
    id: "USTM2026001",
    name: "Rahul Sharma",
    department: "Computer Science",
    semester: "4th",
    email: "rahul@ustm.ac.in",
    phone: "9876543210",
    status: "Active",
  },
  {
    id: "USTM2026002",
    name: "Priya Das",
    department: "Data Science",
    semester: "2nd",
    email: "priya@ustm.ac.in",
    phone: "9123456780",
    status: "Active",
  },
  {
    id: "USTM2026003",
    name: "Aman Singh",
    department: "Civil Engineering",
    semester: "6th",
    email: "aman@ustm.ac.in",
    phone: "9988776655",
    status: "Pending",
  },
  {
    id: "USTM2026004",
    name: "Neha Roy",
    department: "Pharmacy",
    semester: "8th",
    email: "neha@ustm.ac.in",
    phone: "9876501234",
    status: "Inactive",
  },
  {
    id: "USTM2026005",
    name: "Aditya Paul",
    department: "Management",
    semester: "3rd",
    email: "aditya@ustm.ac.in",
    phone: "9000011111",
    status: "Active",
  },
];

const StudentsTable = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "25px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Top Controls */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#F4F7FC",
            padding: "12px 18px",
            borderRadius: "12px",
            width: "320px",
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
              fontSize: "15px",
            }}
          />
        </div>

        <button
          style={{
            background: "#F4B400",
            color: "#002B5B",
            border: "none",
            padding: "12px 22px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaPlus />

          Add Student
        </button>
      </div>

      {/* Filters */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <select
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option>All Departments</option>
          <option>Computer Science</option>
          <option>Data Science</option>
          <option>Management</option>
          <option>Pharmacy</option>
        </select>

        <select
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option>Semester</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
        </select>

        <select
          style={{
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd",
          }}
        >
          <option>Status</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Inactive</option>
        </select>
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
              color: "#fff",
            }}
          >
            <th style={{ padding: "15px" }}>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              style={{
                textAlign: "center",
                borderBottom: "1px solid #eee",
              }}
            >
              <td style={{ padding: "15px" }}>{student.id}</td>

              <td>{student.name}</td>

              <td>{student.department}</td>

              <td>{student.semester}</td>

              <td>{student.email}</td>

              <td>{student.phone}</td>

              <td>
                <span
                  style={{
                    padding: "6px 14px",
                    borderRadius: "20px",
                    color: "#fff",
                    background:
                      student.status === "Active"
                        ? "#198754"
                        : student.status === "Pending"
                        ? "#F4B400"
                        : "#DC3545",
                  }}
                >
                  {student.status}
                </span>
              </td>

              <td>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <FaEye
                    color="#0D6EFD"
                    style={{ cursor: "pointer" }}
                  />

                  <FaEdit
                    color="#198754"
                    style={{ cursor: "pointer" }}
                  />

                  <FaTrash
                    color="#DC3545"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}

      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "#666",
          }}
        >
          Showing 1–5 of 1245 Students
        </span>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <button>Previous</button>

          <button>1</button>

          <button>2</button>

          <button>3</button>

          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default StudentsTable;