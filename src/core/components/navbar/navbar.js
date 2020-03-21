import React from "react";
import "./navbar.scss";

const Navbar = ({ title }) => {
  return (
    <nav>
      <h2 className="u-text-center">{title}</h2>
    </nav>
  );
};

export default Navbar;
