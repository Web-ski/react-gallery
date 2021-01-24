import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header({ children }) {
  return (
    <Navbar>
      <Navbar.Brand href="/">rPG</Navbar.Brand>
      {children}
    </Navbar>
  );
}

export default Header;
