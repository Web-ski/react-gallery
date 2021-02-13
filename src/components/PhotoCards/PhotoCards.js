import React from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const PhotoCards = ({ cardPhotoUrls, cardId }) => {
  const { id } = useParams();

  return (
    <Card as={NavLink} to={`/collection/${id}/${cardId}`}>
      <Card.Img variant="top" src={cardPhotoUrls.small} />
    </Card>
  );
};

export default PhotoCards;
