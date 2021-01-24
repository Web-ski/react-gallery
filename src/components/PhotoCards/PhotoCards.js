import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PhotoCards = ({ cardTitle, cardDescription, cardPhotoUrls, cardId }) => {
  return (
    <Card>
      <Card.Img variant="top" src={cardPhotoUrls.small} />
      {/* <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <NavLink to={`/collection/${cardId}`}></NavLink>
      </Card.Body> */}
    </Card>
  );
};

export default PhotoCards;
