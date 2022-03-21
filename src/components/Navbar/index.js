import React from "react";
import { Nav, NavLink, Bars, NavIcon } from "./NavbarElements";

const Navbar = ({ handleToggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Plants</NavLink>
        <NavIcon onClick={handleToggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
