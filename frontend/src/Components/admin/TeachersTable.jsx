import React from "react";
import {
  FaSearch,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const TeachersTable = () => {
  const teachers = [
    {
      id: "EMP2026001",
      name: "Dr. Amit Sharma",
      department: "Computer Science",
      designation: "Professor",
      qualification: "Ph.D",
      email: "amit@ustm.ac.in",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: "EMP2026002",
      name: "Dr. Riya Das",
      department: "Data Science",
      designation: "Associate Professor",
      qualification: "Ph.D",
      email: "riya@ustm.ac.in",
      phone: "9123456780",
      status: "Active",
    },
    {
      id: "EMP2026003",
      name: "Prof. Anil Roy",
      department: "Civil Engineering",
      designation: "Assistant Professor",
      qualification: "M.Tech",
      email: "anil@ustm.ac.in",
      phone: "9988776655",
      status: "leave",
    },
    {
      id: "EMP2026004",
      name: "Dr. Neha Ahmed",
      department: "Pharmacy",
      designation: "Professor",
      qualification: "Ph.D",
      email: "neha@ustm.ac.in",
      phone: "9876501234",
      status: "Inactive",
    },
    {
      id: "EMP2026005",
      name: "Prof. Aditya Paul",
      department: "Management",
      designation: "Assistant Professor",
      qualification: "MBA",
      email: "aditya@ustm.ac.in",
      phone: "9000011111",
      status: "Active",
    },
  ];

  const getStatusColor = (status) => {
    if (status === "Active") return "#198754";
    if (status === "leave") return "#F4B400";
    return "#DC3545";
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Search + Button */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "25px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#F4F7FC",
            padding: "12px 18px",
            borderRadius: "14px",
            width: "350px",
          }}
        >
          <FaSearch color="#666" />

          <input
            placeholder="Search Teacher..."
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
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
            padding: "14px 28px",
            borderRadius: "14px",
            fontWeight: "700",
            fontSize: "18px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <FaPlus />
          Add Teacher
        </button>
      </div>

      {/* Filters */}

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginBottom: "25px",
        }}
      >
        <select style={selectStyle}>
          <option>All Departments</option>
        </select>

        <select style={selectStyle}>
          <option>Designation</option>
        </select>

        <select style={selectStyle}>
          <option>Status</option>
        </select>
      </div>

      {/* Table */}

      <div style={{ overflowX: "auto" }}>
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
              {[
                "ID",
                "Name",
                "Department",
                "Designation",
                "Qualification",
                "Email",
                "Phone",
                "Status",
                "Actions",
              ].map((head) => (
                <th
                  key={head}
                  style={{
                    padding: "18px",
                    textAlign: "center",
                    fontSize: "18px",
                  }}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {teachers.map((teacher) => (
              <tr
                key={teacher.id}
                style={{
                  borderBottom: "1px solid #eee",
                }}
              >
                <td style={td}>{teacher.id}</td>
                <td style={td}>{teacher.name}</td>
                <td style={td}>{teacher.department}</td>
                <td style={td}>{teacher.designation}</td>
                <td style={td}>{teacher.qualification}</td>
                <td style={td}>{teacher.email}</td>
                <td style={td}>{teacher.phone}</td>

                <td style={td}>
                  <span
                    style={{
                      background: getStatusColor(teacher.status),
                      color: "#fff",
                      padding: "8px 18px",
                      borderRadius: "30px",
                      fontWeight: "600",
                    }}
                  >
                    {teacher.status}
                  </span>
                </td>

                <td style={td}>
                  <FaEye
                    style={{
                      color: "#0D6EFD",
                      cursor: "pointer",
                      marginRight: "15px",
                    }}
                  />

                  <FaEdit
                    style={{
                      color: "#198754",
                      cursor: "pointer",
                      marginRight: "15px",
                    }}
                  />

                  <FaTrash
                    style={{
                      color: "#DC3545",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "25px",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        <p
          style={{
            color: "#666",
          }}
        >
          Showing 1–5 of 86 Teachers
        </p>

        <div>
          Previous&nbsp;&nbsp;1&nbsp;&nbsp;2&nbsp;&nbsp;Next
        </div>
      </div>
    </div>
  );
};

const selectStyle = {
  padding: "12px 18px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "16px",
};

const td = {
  padding: "18px",
  textAlign: "center",
  fontSize: "16px",
};

export default TeachersTable;