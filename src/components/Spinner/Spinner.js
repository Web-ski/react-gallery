import React from "react";
import Spinner from "react-bootstrap/Spinner";

const spinnerStyle = {
  margin: "40px auto 40px",
};

const SpinnerElem = () => (
  <Spinner animation="border" variant="primary" style={spinnerStyle} />
);

export default SpinnerElem;
