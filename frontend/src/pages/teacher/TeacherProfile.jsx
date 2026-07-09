import React from "react";
import TeacherSidebar from "../../Components/teacher/TeacherSidebar";
import TeacherNavbar from "../../Components/teacher/TeacherNavbar";

import {
  FaCamera,
  FaEdit,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUniversity,
  FaGraduationCap,
  FaBookOpen,
  FaStar,
  FaAward,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

const TeacherProfile = () => {

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

        {/* Profile Banner */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 10px 25px rgba(0,0,0,.08)",
            marginBottom: "30px",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >

            {/* Left */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "25px",
              }}
            >

              <div
                style={{
                  position: "relative",
                }}
              >

               <div
  style={{
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#002B5B",
    border: "6px solid #F4B400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: "64px",
  }}
>
  <FaUserGraduate />
</div>

                <button
                  style={{
                    position: "absolute",
                    bottom: "5px",
                    right: "5px",
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    border: "none",
                    background: "#002B5B",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <FaCamera />
                </button>

              </div>

              <div>

                <h1
                  style={{
                    color: "#002B5B",
                    marginBottom: "8px",
                  }}
                >
                  Md. Jainul Abudin
                </h1>

                <h3
                  style={{
                    color: "#555",
                    fontWeight: "500",
                  }}
                >
                  Assistant Professor
                </h3>

                <p
                  style={{
                    color: "#666",
                    marginTop: "8px",
                  }}
                >
                  Department of Computer Science
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "18px",
                    flexWrap: "wrap",
                  }}
                >

                  <span
                    style={{
                      background: "#16A34A",
                      color: "#fff",
                      padding: "8px 15px",
                      borderRadius: "20px",
                    }}
                  >
                    ⭐ 4.9 Rating
                  </span>

                  <span
                    style={{
                      background: "#2563EB",
                      color: "#fff",
                      padding: "8px 15px",
                      borderRadius: "20px",
                    }}
                  >
                    15 Years Experience
                  </span>

                  <span
                    style={{
                      background: "#F4B400",
                      color: "#002B5B",
                      padding: "8px 15px",
                      borderRadius: "20px",
                      fontWeight: "600",
                    }}
                  >
                    312 Students
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

            <div>

              <button
                style={{
                  background: "#002B5B",
                  color: "#ffffff",
                  border: "none",
                  padding: "15px 28px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "15px",
                }}
              >

                <FaEdit />

                Edit Profile

              </button>

            </div>

          </div>

        </div>

        {/* Quick Statistics */}

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
              icon:<FaBookOpen/>,
              value:"5",
              title:"Courses",
              color:"#2563EB",
            },
            {
              icon:<FaUserGraduate/>,
              value:"312",
              title:"Students",
              color:"#16A34A",
            },
            {
              icon:<FaAward/>,
              value:"18",
              title:"Awards",
              color:"#F59E0B",
            },
            {
              icon:<FaClock/>,
              value:"15",
              title:"Years",
              color:"#8B5CF6",
            },
            {
              icon:<FaStar/>,
              value:"4.9",
              title:"Rating",
              color:"#EF4444",
            },

          ].map((item,index)=>(

            <div
              key={index}
              style={{
                background:"#ffffff",
                padding:"25px",
                borderRadius:"18px",
                textAlign:"center",
                boxShadow:"0 8px 20px rgba(0,0,0,.08)",
              }}
            >

              <div
                style={{
                  fontSize:"30px",
                  color:item.color,
                  marginBottom:"15px",
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
                {/* Information Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Left Column */}

          <div>

            {/* Personal Information */}

            <div
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                padding: "30px",
                boxShadow: "0 8px 20px rgba(0,0,0,.08)",
                marginBottom: "25px",
              }}
            >

              <h2
                style={{
                  color: "#002B5B",
                  marginBottom: "25px",
                }}
              >
                Personal Information
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "20px",
                }}
              >

                {[
                  {
                    icon:<FaEnvelope/>,
                    title:"Email",
                    value:"jainul.abudin@ustm.ac.in",
                  },
                  {
                    icon:<FaPhone/>,
                    title:"Phone",
                    value:"+91 9876543210",
                  },
                  {
                    icon:<FaMapMarkerAlt/>,
                    title:"Office",
                    value:"Block B • Room 302",
                  },
                  {
                    icon:<FaUniversity/>,
                    title:"University",
                    value:"USTM Meghalaya",
                  },
                ].map((item,index)=>(

                  <div
                    key={index}
                    style={{
                      background:"#F8FAFD",
                      borderRadius:"15px",
                      padding:"20px",
                      display:"flex",
                      alignItems:"center",
                      gap:"18px",
                    }}
                  >

                    <div
                      style={{
                        width:"55px",
                        height:"55px",
                        borderRadius:"50%",
                        background:"#002B5B",
                        color:"#ffffff",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"22px",
                      }}
                    >
                      {item.icon}
                    </div>

                    <div>

                      <h4
                        style={{
                          color:"#777",
                          marginBottom:"6px",
                        }}
                      >
                        {item.title}
                      </h4>

                      <p
                        style={{
                          color:"#002B5B",
                          fontWeight:"600",
                        }}
                      >
                        {item.value}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Qualifications */}

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
                Academic Qualifications
              </h2>

              {[
                {
                  degree:"Ph.D. in Computer Science",
                  institute:"Indian Institute of Technology",
                  year:"2016",
                },
                {
                  degree:"M.Tech in Computer Science",
                  institute:"National Institute of Technology",
                  year:"2011",
                },
                {
                  degree:"B.Tech in Computer Science",
                  institute:"Assam Engineering College",
                  year:"2009",
                },
              ].map((item,index)=>(

                <div
                  key={index}
                  style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    background:"#F8FAFD",
                    padding:"18px",
                    borderRadius:"15px",
                    marginBottom:"15px",
                  }}
                >

                  <div
                    style={{
                      display:"flex",
                      alignItems:"center",
                      gap:"15px",
                    }}
                  >

                    <FaGraduationCap
                      color="#2563EB"
                      size={26}
                    />

                    <div>

                      <h3
                        style={{
                          color:"#002B5B",
                          marginBottom:"5px",
                        }}
                      >
                        {item.degree}
                      </h3>

                      <p
                        style={{
                          color:"#666",
                        }}
                      >
                        {item.institute}
                      </p>

                    </div>

                  </div>

                  <span
                    style={{
                      background:"#002B5B",
                      color:"#ffffff",
                      padding:"8px 16px",
                      borderRadius:"20px",
                    }}
                  >
                    {item.year}
                  </span>

                </div>

              ))}

            </div>

          </div>
                    {/* Right Column */}

          <div>

            {/* Courses Teaching */}

            <div
              style={{
                background:"#ffffff",
                borderRadius:"20px",
                padding:"30px",
                boxShadow:"0 8px 20px rgba(0,0,0,.08)",
                marginBottom:"25px",
              }}
            >

              <h2
                style={{
                  color:"#002B5B",
                  marginBottom:"25px",
                }}
              >
                Courses Teaching
              </h2>

              {[
                {
                  course:"Machine Learning",
                  students:72,
                },
                {
                  course:"Database Systems",
                  students:68,
                },
                {
                  course:"Data Structures",
                  students:64,
                },
                {
                  course:"Operating Systems",
                  students:58,
                },
                {
                  course:"Artificial Intelligence",
                  students:50,
                },
              ].map((item,index)=>(

                <div
                  key={index}
                  style={{
                    background:"#F8FAFD",
                    borderRadius:"15px",
                    padding:"18px",
                    marginBottom:"15px",
                  }}
                >

                  <div
                    style={{
                      display:"flex",
                      justifyContent:"space-between",
                      marginBottom:"10px",
                    }}
                  >

                    <strong>{item.course}</strong>

                    <span>{item.students} Students</span>

                  </div>

                  <div
                    style={{
                      height:"8px",
                      background:"#E5E7EB",
                      borderRadius:"20px",
                    }}
                  >

                    <div
                      style={{
                        width:`${60 + index*8}%`,
                        height:"100%",
                        background:"#2563EB",
                        borderRadius:"20px",
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

            {/* Achievements */}

            <div
              style={{
                background:"#ffffff",
                borderRadius:"20px",
                padding:"30px",
                boxShadow:"0 8px 20px rgba(0,0,0,.08)",
                marginBottom:"25px",
              }}
            >

              <h2
                style={{
                  color:"#002B5B",
                  marginBottom:"25px",
                }}
              >
                Achievements
              </h2>

              {[
                "🏆 Best Faculty Award 2025",
                "⭐ Student Rating 4.9 / 5",
                "🥇 Research Excellence Award",
                "📖 Published 18 Research Papers",
                "🎖 AI Innovation Award",
              ].map((item,index)=>(

                <div
                  key={index}
                  style={{
                    background:"#F8FAFD",
                    padding:"15px",
                    borderRadius:"12px",
                    marginBottom:"12px",
                  }}
                >
                  {item}
                </div>

              ))}

            </div>

            {/* Today's Schedule */}

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
                Today's Schedule
              </h2>

              {[
                {
                  time:"09:00 - 10:00",
                  subject:"Machine Learning",
                },
                {
                  time:"11:00 - 12:00",
                  subject:"Database Systems",
                },
                {
                  time:"02:00 - 03:00",
                  subject:"Data Structures",
                },
                {
                  time:"04:00 - 05:00",
                  subject:"Student Mentoring",
                },
              ].map((item,index)=>(

                <div
                  key={index}
                  style={{
                    display:"flex",
                    justifyContent:"space-between",
                    alignItems:"center",
                    padding:"15px",
                    borderBottom:"1px solid #EEEEEE",
                  }}
                >

                  <div>

                    <strong>{item.subject}</strong>

                    <br/>

                    <span
                      style={{
                        color:"#777",
                      }}
                    >
                      {item.time}
                    </span>

                  </div>

                  <FaClock
                    color="#F4B400"
                    size={20}
                  />

                </div>

              ))}

            </div>

          </div>

        </div>
                {/* Bottom Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
            marginBottom: "35px",
          }}
        >

          {/* Student Feedback */}

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
              Student Feedback
            </h2>

            {[
              {
                title: "Teaching Quality",
                value: "4.9 / 5",
              },
              {
                title: "Communication",
                value: "4.8 / 5",
              },
              {
                title: "Course Content",
                value: "4.9 / 5",
              },
              {
                title: "Overall Satisfaction",
                value: "97%",
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
                  marginBottom:"14px",
                }}
              >

                <span
                  style={{
                    fontWeight:"600",
                    color:"#555",
                  }}
                >
                  {item.title}
                </span>

                <span
                  style={{
                    color:"#16A34A",
                    fontWeight:"700",
                  }}
                >
                  {item.value}
                </span>

              </div>

            ))}

          </div>

          {/* Account Settings */}

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
              Account Settings
            </h2>

            <div style={{marginBottom:"18px"}}>
              <label>Language</label>

              <select
                style={{
                  width:"100%",
                  padding:"12px",
                  marginTop:"8px",
                  borderRadius:"10px",
                  border:"1px solid #ddd",
                }}
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Assamese</option>
              </select>
            </div>

            <div style={{marginBottom:"18px"}}>
              <label>Email Notifications</label>

              <select
                style={{
                  width:"100%",
                  padding:"12px",
                  marginTop:"8px",
                  borderRadius:"10px",
                  border:"1px solid #ddd",
                }}
              >
                <option>Enabled</option>
                <option>Disabled</option>
              </select>
            </div>

            <div style={{marginBottom:"25px"}}>
              <label>Theme</label>

              <select
                style={{
                  width:"100%",
                  padding:"12px",
                  marginTop:"8px",
                  borderRadius:"10px",
                  border:"1px solid #ddd",
                }}
              >
                <option>Light Mode</option>
                <option>Dark Mode</option>
              </select>
            </div>

            <button
              style={{
                width:"100%",
                background:"#002B5B",
                color:"#ffffff",
                border:"none",
                padding:"15px",
                borderRadius:"12px",
                fontWeight:"600",
                cursor:"pointer",
                fontSize:"16px",
              }}
            >
              Save Changes
            </button>

          </div>

        </div>

        {/* Footer */}

        <div
          style={{
            background:"#002B5B",
            color:"#ffffff",
            padding:"35px",
            borderRadius:"20px",
            textAlign:"center",
          }}
        >

          <h2
            style={{
              marginTop:0,
            }}
          >
            Faculty Profile Center
          </h2>

          <p
            style={{
              color:"#E5E7EB",
              marginTop:"15px",
              lineHeight:"28px",
              maxWidth:"900px",
              marginLeft:"auto",
              marginRight:"auto",
            }}
          >
            Manage your professional profile, academic qualifications,
            teaching schedule, achievements, publications and account
            preferences from one centralized faculty workspace.
          </p>

        </div>

      </div>

    </div>

  );

};

export default TeacherProfile;