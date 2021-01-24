import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CollectionsCards = ({
  cardTitle,
  cardDescription,
  cardCoverPhoto,
  cardId,
}) => {
  const addTitle = (title) => {
    let newTitle = title.split(" ");
    newTitle = newTitle.join("_");
    console.log(newTitle);
    return newTitle;
  };
  return (
    <Card>
      <Card.Img variant="top" src={cardCoverPhoto.urls.raw} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <NavLink to={`/collection/${addTitle(cardTitle)}=${cardId}`}>
          <Button variant="primary">Show Collection</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default CollectionsCards;
