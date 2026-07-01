import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/ustm-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";
import { authService } from "../../api/auth.service";

function Navbar(props) {
  const value = props.page;
  const navigate = useNavigate();

  const [isAuthenticated] = useState(
    authService.isUserAuthenticated()
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogOut = async () => {
    await authService.logout();
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-[#002147] flex justify-between items-center px-[4vw] py-2 z-[999]">

        {/* Logo Section */}
        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="USTM Logo"
            className="h-[90px] w-auto object-contain cursor-pointer"
          />

          <div className="flex flex-col">
            <h1 className="text-[30px] font-bold text-white leading-tight">
              USTM LMS
            </h1>

            <p className="text-[14px] text-gray-300">
              Learning Management System
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex">

          <div id="menu-btn" className="hidden">
            <div
              className="menu-dash text-white"
              onClick={toggleMobileMenu}
            >
              &#9776;
            </div>
          </div>

          <i
            id="menu-close"
            className="fas fa-times hidden"
            onClick={closeMobileMenu}
          ></i>

          <ul
            className={`flex justify-end items-center ${
              isMobileMenuOpen ? "active" : ""
            }`}
          >

            {isMobileMenuOpen && (
              <li className="close-button">
                <button onClick={closeMobileMenu}>X</button>
              </li>
            )}

            {/* Home */}
            <li className="list-none ml-8">
              <Link
                to={"/"}
                className={`text-[18px] font-semibold hover:text-yellow-400 transition duration-300 ${
                  value === "home"
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                Home
              </Link>
            </li>

            {/* Courses */}
            <li className="list-none ml-8">
              <Link
                to={"/courses"}
                className={`text-[18px] font-semibold hover:text-yellow-400 transition duration-300 ${
                  value === "courses"
                    ? "text-yellow-400"
                    : "text-white"
                }`}
              >
                Courses
              </Link>
            </li>

            {/* Profile */}
            {isAuthenticated && (
              <li className="list-none ml-8">
                <Link
                  to={"/profile"}
                  className={`text-[18px] font-semibold hover:text-yellow-400 transition duration-300 ${
                    value === "profile"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  Profile
                  <FontAwesomeIcon icon={faUser} className="ml-2" />
                </Link>
              </li>
            )}

            {/* Learnings */}
            {isAuthenticated && (
              <li className="list-none ml-8">
                <Link
                  to={"/learnings"}
                  className={`text-[18px] font-semibold hover:text-yellow-400 transition duration-300 ${
                    value === "learnings"
                      ? "text-yellow-400"
                      : "text-white"
                  }`}
                >
                  Learnings
                  <FontAwesomeIcon
                    icon={faChalkboardUser}
                    className="ml-2"
                  />
                </Link>
              </li>
            )}

            {/* Login/Logout */}
            <li className="list-none ml-8">
              {isAuthenticated ? (
                <button
                  onClick={handleLogOut}
                  className="bg-[#f59e0b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="bg-[#f59e0b] text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
                >
                  Login / Signup
                </button>
              )}
            </li>

          </ul>
        </div>
      </nav>

      {/* Spacer because navbar is fixed */}
      <div className="h-[70px]"></div>
    </div>
  );
}

export default Navbar;