import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ cardTitle, cardDescription, cardCoverPhoto }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardCoverPhoto.urls.raw} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cards;
