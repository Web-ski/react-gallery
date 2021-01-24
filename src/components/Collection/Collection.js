import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { NavLink, useParams } from "react-router-dom";
import Header from "../Header";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import PhotoCards from "../PhotoCards";
import { UNSPLASH_BASE_URL } from "../../constants";
import { UNSPLASH_ACCESS_KEY } from "../../accesses";

const Collection = (props) => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${UNSPLASH_BASE_URL}/collections/${id}/photos/?client_id=${UNSPLASH_ACCESS_KEY}`
      )
      .then((res) => {
        const getData = res.data;
        setData(getData);
        console.log(getData);
      });
  }, []);

  return (
    <Container>
      <Header>
        <h1>Collection {id}</h1>
        <NavLink to="/">
          <Button variant="primary">Home</Button>
        </NavLink>
      </Header>
      <CardColumns>
        {data.map((item) => (
          <PhotoCards
            key={item.id}
            cardId={item.id}
            cardTitle={item.title}
            cardDescription={item.description}
            cardPhotoUrls={item.urls}
          />
        ))}
      </CardColumns>
    </Container>
  );
};

export default Collection;
