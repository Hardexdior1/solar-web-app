import React, { useState, useEffect } from "react";
// import logo from "../../public/images/logo (1).png";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const [active, setActive] = useState("Home");

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 200;
      setIsScrolled(show);
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <nav
        className={
          isScrolled
            ? "z-10 hidden md:flex md:items-center md:justify-between md:px-20 py-6 md:fixed left-0 right-0 bg-green-800 shadow-lg duration-[300ms] text-white"
            : "hidden md:flex bg-blue-800 md:items-center md:justify-between md:px-20 py-6 shadow-lg duration-[300ms] text-white"
        }
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-14 h-auto" />

          {/* Adjust size if needed */}
        </Link>
        <ul className="flex gap-6 md:items-center md:justify-between">
          <li>
            <Link
              to="/"
              className={
                active === "home"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("Home")}
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="#about"
              className={
                active === "about"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("about")}
            >
              {/* <Link
                // to="#blog"
               > */}
              About
              {/* </Link> */}
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={
                active === "blog"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("blog")}
            >
              {/* <Link
                // to="#blog"
               > */}
              Blog
              {/* </Link> */}
            </a>
          </li>

          <li>
            <Link
              to="/team"
              className={
                active === "team"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("team")}
            >
              Team
            </Link>
          </li>

          <li>
            <a
              href="#projects"
              className={
                active === "projects"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("projects")}
            >
              {/* <Link
                // to="#blog"
               > */}
              Projects
              {/* </Link> */}
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                active === "contact"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => setActive("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div>
          <a href="#about">
            <button className="bg-yellow-500 rounded text-white px-6 py-2 font-bold hover:bg-yellow-600 transition duration-300">
              Get Started
            </button>
          </a>
        </div>
      </nav>

      <div
        className={
          showNav
            ? "z-50 px-4 py-4 gap-4 bg-black h-full  md:hidden"
            : "z-50 px-4 py-4 gap-4 mb-40 h-full bg-black md:hidden"
        }
      >
        <nav className="flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="logo" className="w-14 h-auto" />
          </Link>
          {showNav ? (
            <div
              className="grid gap-1"
              onClick={() => {
                toggleNav();
              }}
            >
              <div className="h-1 w-5 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
              <div className="h-1 w-6 bg-white"></div>
            </div>
          ) : (
            ""
          )}
          {showNav ? (
            ""
          ) : (
            <div
              className="font-bold text-3xl text-white z-20"
              onClick={() => {
                toggleNav();
              }}
            >
              x
            </div>
          )}
        </nav>
        <ul
          className={
            showNav
              ? "grid gap-6 md:items-center py-4 text-white bg-green-800 px-6 absolute right-0 left-0 top-[-390px] h-auto duration-[300ms]"
              : "grid gap-6 md:items-center py-10 text-white bg-green-800 px-8 absolute right-0 left-0 top-[-16px] h-auto duration-[300ms] z-10"
          }
        >
          <li>
            <Link
              to="/"
              className={
                active === "home"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("home");
                setShowNav(true);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className={
                active === "about"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("about");
                setShowNav(true);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={
                active === "blog"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("blog");
                setShowNav(true);
              }}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={
                active === "projects"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("projects");
                setShowNav(true);
              }}
            >
              Projects
            </a>
          </li>
          <li>
            <Link
              to="/contact"
              className={
                active === "contact"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("contact");
                setShowNav(true);
              }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/team"
              className={
                active === "team"
                  ? "text-yellow-300 font-bold"
                  : "text-white font-bold md:text-gray-200"
              }
              onClick={() => {
                setActive("team");
                setShowNav(true);
              }}
            >
              Team
            </Link>
          </li>
          <li>
            <a href="#get-started">
              <button className="bg-yellow-500 rounded text-white px-6 py-2 font-bold hover:bg-yellow-600 transition duration-300">
                Get Started
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
