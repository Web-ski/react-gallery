import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const jumboStyle = {
  margin: "0px auto 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

function StartInfo() {
  return (
    <Jumbotron style={jumboStyle}>
      <h1>Hello, beautiful Recruiter!</h1>
      <p>
        This is a project of simple photo gallery, created with React, Bootstrap
        and Unsplash API.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
}

export default StartInfo;
