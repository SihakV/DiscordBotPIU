import React from "react";
import { NavLink } from "react-router-dom";
import logodc from "../images/Logodc_logo.png";
import useAuth from "../auth/useAuth";

const Logo = () => {
  const { authenticated } = useAuth();

  return (
    <div>
      {authenticated ? (
        <NavLink to="/Success">
          <img src={logodc} alt="Logo" className="w-16 h-16" />
        </NavLink>
      ) : (
        <NavLink to="/">
          <img src={logodc} alt="Logo" className="w-16 h-16" />
        </NavLink>
      )}
    </div>
  );
};

export default Logo;
