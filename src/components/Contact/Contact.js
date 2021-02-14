import React from "react";
import MainTemplate from "../mainTemplate";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Header from "../Header";
import IMAGE_BG from "../../jumbo-bg.png";

const contactStyle = {
  position: "relative",
  margin: "40px auto 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
};

const Contact = () => {
  const time = () => {
    const timeNow = new Date();
    const startTime = new Date("February 13, 2021 23:59:00");
    const timePeriod = Math.round((timeNow - startTime) / 86400000);
    return timePeriod;
  };

  return (
    <MainTemplate>
      <Header />
      <Container style={contactStyle}>
        <Card style={{ width: "100%" }} className="text-center">
          <Card.Header>About Project</Card.Header>
          <Card.Img variant="top" src={IMAGE_BG} />
          <Card.Body>
            <Card.Title as="h2" style={{ marginBottom: "20px" }}>
              react Photo Gallery
            </Card.Title>
            <Card.Subtitle as="h5" className="mb-2 text-muted">
              by Paweł Nieczuja-Ostrowski
            </Card.Subtitle>
            <Card.Text style={{ marginTop: "20px" }}>
              This is a project of simple photo gallery, created with{" "}
              <strong>React</strong>, <strong>Bootstrap</strong> and{" "}
              <strong>Unsplash API</strong>.
            </Card.Text>
            <Card.Link
              href="https://www.linkedin.com/in/pawe%C5%82-nieczuja-ostrowski-6b084a88/"
              target="_blank"
            >
              LinkedIn
            </Card.Link>
            <Card.Link
              href="https://profile.codersrank.io/user/web-ski/"
              target="_blank"
            >
              CodersRank
            </Card.Link>
            <Card.Link href="https://gitlab.com/Web-ski/" target="_blank">
              GitLab
            </Card.Link>
          </Card.Body>
          <Card.Body>
            <Button
              variant="primary"
              as={Card.Link}
              href="http://nieczuja-portfolio.pl/"
              target="_blank"
            >
              Author's Portfolio
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Created {time()} days ago
          </Card.Footer>
        </Card>
      </Container>
    </MainTemplate>
  );
};

export default Contact;
