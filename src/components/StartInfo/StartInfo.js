import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const jumboStyle = {
  position: "relative",
  margin: "40px auto 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  overflow: "hidden",
  color: "white",
};

const boxStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
};

const textStyle = {
  color: "white",
  zIndex: "2",
  textShadow: "0px 0px 8px black",
  marginBottom: "20px",
};

function StartInfo({ image }) {
  return (
    <Jumbotron style={jumboStyle}>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div style={boxStyle}></div>
      </div>
      <h1 style={textStyle}>Hello, beautiful Recruiter!</h1>
      <h6 style={textStyle}>
        This is a project of simple photo gallery, created with React, Bootstrap
        and Unsplash API.
      </h6>
      <p style={textStyle}>
        <Button
          as={NavLink}
          to="/contact"
          variant="primary"
          style={{
            boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
            margin: "20px 0 0",
            textShadow: "none",
          }}
        >
          Learn more
        </Button>
      </p>
    </Jumbotron>
  );
}

export default StartInfo;
