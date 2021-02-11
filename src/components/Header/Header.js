import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header({ children }) {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="/">rPG</Navbar.Brand>
        <h2 as="h1">react Photo Gallery</h2>
      </Navbar>
    </>
  );
}

export default Header;
