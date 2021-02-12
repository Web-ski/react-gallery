import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Header from "../Header";

const contactStyle = {
  position: "relative",
  //margin: "40px auto 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
};

const Contact = () => {
  const time = () => {
    var timeNow = new Date();
    console.log(timeNow);
  };

  time();

  return (
    <>
      <Header />
      <Container style={contactStyle}>
        <Card style={{ width: "100%" }} className="text-center">
          <Card.Header>About Project</Card.Header>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title as="h2">react Photo Gallery</Card.Title>
            <Card.Subtitle as="h5" className="mb-2 text-muted">
              by Paweł Nieczuja-Ostrowski
            </Card.Subtitle>
            <Card.Text>
              This is a project of simple photo gallery, created with React,
              Bootstrap and Unsplash API.
            </Card.Text>
            <Card.Link href="https://gitlab.com/Web-ski/" target="_blank">
              Another Repository
            </Card.Link>
            <Card.Link href="http://nieczuja-portfolio.pl/" target="_blank">
              Author's Portfolio
            </Card.Link>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Contact;
