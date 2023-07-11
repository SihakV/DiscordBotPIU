import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  return (
    <div className="sticky top-0 flex flex-col w-full px-4 text-white bg-gray-800">
      <nav className="mt-20 space-y-2">
        <NavLink
          to="/about"
          exact
          className="relative flex items-center"
          activeClassName="text-purple-600"
        >
          <span
            className="ml-6 text-4xl font-semibold font-ibm hover:text-white"
            style={{
              color: location.pathname === "/about" ? "rgb(136, 58, 225)" : "",
            }}
          >
            QUICK START
          </span>
          {location.pathname === "/about" && (
            <div className="absolute top-0 left-0 w-4 h-full transition-transform duration-300 transform translate-x-0 border border-black bg-active-sb-color"></div>
          )}
        </NavLink>
        <NavLink
          to="/CommandList"
          className="relative flex items-center"
          activeClassName="text-purple-600 border border-black"
        >
          <span
            className="ml-6 text-4xl font-semibold font-ibm hover:text-white"
            style={{
              color:
                location.pathname === "/CommandList" ? "rgb(136, 58, 225)" : "",
            }}
          >
            COMMANDS
          </span>
          {location.pathname === "/CommandList" && (
            <div className="absolute top-0 left-0 w-4 h-full transition-transform duration-300 transform translate-x-0 border-black bg-active-sb-color"></div>
          )}
        </NavLink>
        <NavLink
          to="/Team"
          className="relative flex items-center"
          activeClassName="text-purple-600"
        >
          <span
            className="ml-6 text-4xl font-semibold font-ibm hover:text-white"
            style={{
              color: location.pathname === "/Team" ? "rgb(136, 58, 225)" : "",
            }}
          >
            TEAMS{" "}
          </span>
          {location.pathname === "/Team" && (
            <div className="absolute top-0 left-0 w-4 h-full transition-transform duration-300 transform translate-x-0 border-black bg-active-sb-color"></div>
          )}
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
