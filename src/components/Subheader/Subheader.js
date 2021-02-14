import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const divStyle = {
  padding: "20px 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

function Subheader({ children }) {
  return (
    <Container as="header" style={divStyle}>
      {children}
    </Container>
  );
}

export default Subheader;
