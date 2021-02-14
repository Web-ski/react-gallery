import React from "react";
import Navbar from "react-bootstrap/Navbar";

const brandStyle = {
  backgroundColor: "#282c34",
  color: "#61dafb",
  width: "33px",
  height: "33px",
  borderRadius: "3px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "3px",
};

const logoStyle = {
  backgroundColor: "#61dafb",
  width: "35%",
  height: "8px",
  borderRadius: "1px",
};

function Header() {
  return (
    <>
      <Navbar>
        <Navbar.Brand href="/" style={brandStyle}>
          <div style={logoStyle}></div>
          <div style={logoStyle}></div>
          <div style={logoStyle}></div>
          <div style={logoStyle}></div>
        </Navbar.Brand>
        <h3 as="h1" style={{ marginBottom: "0" }}>
          react Photo Gallery
        </h3>
      </Navbar>
    </>
  );
}

export default Header;
