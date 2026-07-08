import React from "react";
import {
  FaUniversity,
  FaShieldAlt,
  FaBell,
  FaDatabase,
  FaServer,
  FaLock,
  FaUserShield,
  FaSave,
  FaCloudUploadAlt,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt,
  FaCog,
} from "react-icons/fa";

const SettingsDashboard = () => {
  return (
    <div>

      {/* ================= UNIVERSITY INFORMATION ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaUniversity
            size={28}
            color="#002B5B"
          />

          <h2
            style={{
              margin: 0,
              color: "#002B5B",
              fontWeight: "700",
            }}
          >
            University Information
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >

          <div>
            <label
              style={{
                fontWeight: "600",
                color: "#444",
              }}
            >
              University Name
            </label>

            <input
              defaultValue="University of Science & Technology Meghalaya"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "15px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontWeight: "600",
                color: "#444",
              }}
            >
              Academic Session
            </label>

            <input
              defaultValue="2026 - 2027"
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                fontSize: "15px",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontWeight: "600",
              }}
            >
              Official Email
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <FaEnvelope
                color="#002B5B"
                style={{
                  marginRight: "10px",
                }}
              />

              <input
                defaultValue="info@ustm.ac.in"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                fontWeight: "600",
              }}
            >
              Contact Number
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <FaPhoneAlt
                color="#002B5B"
                style={{
                  marginRight: "10px",
                }}
              />

              <input
                defaultValue="+91 361 XXXXXXX"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                fontWeight: "600",
              }}
            >
              Website
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "8px",
              }}
            >
              <FaGlobe
                color="#002B5B"
                style={{
                  marginRight: "10px",
                }}
              />

              <input
                defaultValue="https://www.ustm.ac.in"
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #ddd",
                }}
              />
            </div>
          </div>

          <div>
            <label
              style={{
                fontWeight: "600",
              }}
            >
              Time Zone
            </label>

            <select
              style={{
                width: "100%",
                padding: "14px",
                marginTop: "8px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            >
              <option>Asia/Kolkata (GMT +5:30)</option>
              <option>UTC</option>
            </select>
          </div>

        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
          }}
        >
          <button
            style={{
              background: "#F4B400",
              color: "#002B5B",
              border: "none",
              padding: "14px 30px",
              borderRadius: "12px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaSave />
            Save Changes
          </button>

          <button
            style={{
              background: "#002B5B",
              color: "#fff",
              border: "none",
              padding: "14px 30px",
              borderRadius: "12px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaCloudUploadAlt />
            Upload Logo
          </button>
        </div>

      </div>
            {/* ================= SECURITY SETTINGS ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaShieldAlt size={28} color="#002B5B" />

          <h2
            style={{
              margin: 0,
              color: "#002B5B",
            }}
          >
            Security Settings
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >

          {[
            "Two Factor Authentication",
            "Password Expiry Policy",
            "Automatic Logout",
            "IP Whitelist",
            "Administrator Approval",
            "Encrypted Backups",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#F8FAFD",
                padding: "18px 20px",
                borderRadius: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <FaLock color="#002B5B" />
                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item}
                </span>
              </div>

              <label
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "48px",
                  height: "24px",
                }}
              >
                <input
                  type="checkbox"
                  defaultChecked
                />

                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "#28A745",
                    borderRadius: "20px",
                  }}
                />
              </label>
            </div>
          ))}

        </div>
      </div>

      {/* ================= NOTIFICATION SETTINGS ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaBell
            size={28}
            color="#002B5B"
          />

          <h2
            style={{
              margin: 0,
              color: "#002B5B",
            }}
          >
            Notification Preferences
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "20px",
          }}
        >

          {[
            "Email Notifications",
            "SMS Alerts",
            "Push Notifications",
            "Student Alerts",
            "Faculty Alerts",
            "System Maintenance",
            "Assignment Reminders",
            "Security Alerts",
          ].map((item) => (
            <div
              key={item}
              style={{
                background: "#F8FAFD",
                borderRadius: "16px",
                padding: "22px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <FaBell color="#F4B400" />

                <span
                  style={{
                    fontWeight: "600",
                  }}
                >
                  {item}
                </span>
              </div>

              <input
                type="checkbox"
                defaultChecked
                style={{
                  width: "20px",
                  height: "20px",
                }}
              />
            </div>
          ))}

        </div>
      </div>
            {/* ================= SYSTEM CONFIGURATION ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "30px",
          }}
        >
          <FaCog size={28} color="#002B5B" />

          <h2
            style={{
              margin: 0,
              color: "#002B5B",
            }}
          >
            LMS Configuration
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "25px",
          }}
        >

          <div>
            <label style={{ fontWeight: "600" }}>Current Semester</label>
            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            >
              <option>Odd Semester 2026</option>
              <option>Even Semester 2027</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: "600" }}>Maximum Upload Size</label>
            <input
              defaultValue="200 MB"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "600" }}>Attendance Threshold</label>
            <input
              defaultValue="75%"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "600" }}>Maximum Courses / Student</label>
            <input
              defaultValue="8"
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div>
            <label style={{ fontWeight: "600" }}>Default Language</label>
            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>

          <div>
            <label style={{ fontWeight: "600" }}>Theme</label>
            <select
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            >
              <option>USTM Blue</option>
              <option>Dark</option>
              <option>Light</option>
            </select>
          </div>

        </div>
      </div>

      {/* ================= SERVER HEALTH ================= */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginBottom: "30px",
        }}
      >

        {[
          {
            icon: <FaDatabase size={35} color="#0F9D58" />,
            title: "Database",
            value: "Healthy",
            color: "#0F9D58",
          },
          {
            icon: <FaServer size={35} color="#4285F4" />,
            title: "Server Uptime",
            value: "99.98%",
            color: "#4285F4",
          },
          {
            icon: <FaCloudUploadAlt size={35} color="#F4B400" />,
            title: "Storage Used",
            value: "72%",
            color: "#F4B400",
          },
          {
            icon: <FaShieldAlt size={35} color="#DB4437" />,
            title: "Security",
            value: "Protected",
            color: "#DB4437",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              background: "#ffffff",
              padding: "28px",
              borderRadius: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,.08)",
              textAlign: "center",
            }}
          >
            {item.icon}

            <h3
              style={{
                marginTop: "18px",
                color: "#002B5B",
              }}
            >
              {item.title}
            </h3>

            <h2
              style={{
                color: item.color,
                marginTop: "10px",
              }}
            >
              {item.value}
            </h2>
          </div>
        ))}

      </div>

      {/* ================= LIVE PERFORMANCE ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,.08)",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#002B5B",
            marginBottom: "25px",
          }}
        >
          Live Performance Monitor
        </h2>

        {[
          ["CPU Usage", "41%"],
          ["RAM Usage", "58%"],
          ["API Response", "102 ms"],
          ["Database Load", "35%"],
          ["Network Traffic", "1.2 GB"],
          ["Online Users", "612"],
        ].map((item) => (
          <div
            key={item[0]}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "16px 0",
              borderBottom: "1px solid #eee",
            }}
          >
            <span
              style={{
                fontWeight: "600",
              }}
            >
              {item[0]}
            </span>

            <span
              style={{
                color: "#002B5B",
                fontWeight: "700",
              }}
            >
              {item[1]}
            </span>
          </div>
        ))}
      </div>
            {/* ================= ADMIN ROLES ================= */}

      <div
        style={{
          background: "#ffffff",
          borderRadius: "22px",
          padding: "35px",
          boxShadow: "0 8px 22px rgba(0,0,0,.08)",
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            color: "#002B5B",
            marginBottom: "25px",
          }}
        >
          Administrator Roles & Permissions
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
<FaUserShield />
          <thead>

            <tr
              style={{
                background: "#002B5B",
                color: "#ffffff",
              }}
            >
              <th style={headStyle}>Role</th>
              <th style={headStyle}>Users</th>
              <th style={headStyle}>Permission</th>
              <th style={headStyle}>Status</th>
            </tr>

          </thead>

          <tbody>

            {[
              ["Administrator","2","Full Access","Active"],
              ["Registrar","3","Academic Control","Active"],
              ["Faculty","86","Limited","Active"],
              ["Examination Cell","6","Exam Control","Active"],
              ["Accounts","5","Finance","Active"],
            ].map((item,index)=>(

              <tr key={index}>
                <td style={cellStyle}>{item[0]}</td>
                <td style={cellStyle}>{item[1]}</td>
                <td style={cellStyle}>{item[2]}</td>
                <td style={cellStyle}>
                  <span
                    style={{
                      background:"#198754",
                      color:"#ffffff",
                      padding:"6px 15px",
                      borderRadius:"20px",
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

      {/* ================= AUDIT LOG ================= */}

      <div
        style={{
          background:"#ffffff",
          borderRadius:"22px",
          padding:"35px",
          boxShadow:"0 8px 22px rgba(0,0,0,.08)",
          marginBottom:"30px",
        }}
      >

        <h2
          style={{
            color:"#002B5B",
            marginBottom:"25px",
          }}
        >
          Recent Administrator Activity
        </h2>

        {[
          "Administrator updated semester settings",
          "Database backup completed successfully",
          "New faculty account approved",
          "Password security policy updated",
          "SMTP mail server configured",
          "Academic calendar published",
          "Student import completed",
          "Course allocation modified",
        ].map((item,index)=>(

          <div
            key={index}
            style={{
              padding:"15px 20px",
              background:"#F8FAFD",
              borderRadius:"12px",
              marginBottom:"12px",
              borderLeft:"5px solid #002B5B",
            }}
          >
            {item}
          </div>

        ))}

      </div>

      {/* ================= DANGER ZONE ================= */}

      <div
        style={{
          background:"#FFF4F4",
          border:"2px solid #DC3545",
          borderRadius:"22px",
          padding:"35px",
          marginBottom:"30px",
        }}
      >

        <h2
          style={{
            color:"#DC3545",
            marginBottom:"20px",
          }}
        >
          Danger Zone
        </h2>

        <p
          style={{
            color:"#666",
            marginBottom:"25px",
          }}
        >
          These operations affect the entire university system.
          Use only when absolutely necessary.
        </p>

        <div
          style={{
            display:"flex",
            flexWrap:"wrap",
            gap:"18px",
          }}
        >

          {[
            "Restart Server",
            "Clear Cache",
            "Export Database",
            "Download Logs",
            "Maintenance Mode",
            "Emergency Lockdown",
          ].map((btn,index)=>(

            <button
              key={index}
              style={{
                padding:"14px 22px",
                border:"none",
                borderRadius:"12px",
                cursor:"pointer",
                background:"#DC3545",
                color:"#ffffff",
                fontWeight:"700",
              }}
            >
              {btn}
            </button>

          ))}

        </div>

      </div>

      {/* ================= FOOTER ================= */}

      <div
        style={{
          background:"#002B5B",
          color:"#ffffff",
          borderRadius:"22px",
          padding:"30px",
          textAlign:"center",
        }}
      >

        <h2>
          USTM Learning Management System
        </h2>

        <p>
          Version 2.0 • React • Spring Boot • MySQL
        </p>

        <p>
          Last Backup : Today 02:00 AM
        </p>

        <button
          style={{
            marginTop:"20px",
            background:"#F4B400",
            color:"#002B5B",
            border:"none",
            padding:"15px 35px",
            borderRadius:"12px",
            fontWeight:"700",
            cursor:"pointer",
          }}
        >
          Save All Settings
        </button>

      </div>

    </div>
  );
};

const headStyle={
  padding:"16px",
  textAlign:"center",
};

const cellStyle={
  padding:"16px",
  textAlign:"center",
  borderBottom:"1px solid #EEEEEE",
};

export default SettingsDashboard;