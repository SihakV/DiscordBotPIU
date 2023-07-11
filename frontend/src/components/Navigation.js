import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";
import Logo from "./Logo";
const Navigation = ({ signInWithDiscord, authenticated }) => {
  //console.log(authenticated);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-6 bg-background-color">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Logo />
        {isMobile ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              className="text-3xl text-white cursor-pointer"
              onClick={toggleMenu}
            />
            {menuOpen && (
              <ul className="absolute px-4 py-2 bg-white rounded-lg shadow-md top-16 right-4">
                <li className="group">
                  <Menu onClick={toggleMenu} />
                </li>
                {!authenticated && (
                  <li className="group">
                    <button
                      onClick={signInWithDiscord}
                      className="block py-2 text-description-color font-ibm hover:text-gray-900"
                      activeClassName="text-purple-600"
                    >
                      Log In
                    </button>
                  </li>
                )}
              </ul>
            )}
          </>
        ) : (
          <ul className="flex space-x-4">
            <li className="group">
          
              <Menu />
            </li>

            {!authenticated && (
              <li className="group">
                <button
                  onClick={signInWithDiscord}
                  className="px-4 py-2 font-bold transition duration-300 ease-in-out transform rounded-lg bg-purple-custom text-description-color font-ibm hover:text-white hover:bg-purple-600 hover:scale-105"
                >
                  Login with Discord
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
