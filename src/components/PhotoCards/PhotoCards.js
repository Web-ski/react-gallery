import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const PhotoCards = ({ cardPhotoUrls, cardId }) => {
  const { id } = useParams();
  const [visibility, setVisibility] = useState(false);

  const overlayStyle = {
    color: `${visibility ? "white" : "transparent"}`,
    backgroundColor: `${visibility ? "rgba(0,0,0,.3)" : "transparent"}`,
    transition: ".3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Card
      as={NavLink}
      to={`/collection/${id}/${cardId}`}
      className="hover-zoom"
    >
      <Card.Img variant="top" src={cardPhotoUrls.small} />

      <Card.ImgOverlay
        style={overlayStyle}
        onMouseEnter={() => {
          setVisibility(true);
        }}
        onMouseLeave={() => {
          setVisibility(false);
        }}
      >
        <Card.Title>Click to see the full picture</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default PhotoCards;
