import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { NavLink, useParams } from "react-router-dom";
import Header from "../Header";
import Subheader from "../Subheader";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";
import PhotoCards from "../PhotoCards";
import { UNSPLASH_BASE_URL } from "../../constants";
import { UNSPLASH_ACCESS_KEY } from "../../accesses";

const Collection = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const addId = (url) => {
    let newId = url.split("=");
    return newId[newId.length - 1];
  };

  const addSubtitle = (url) => {
    let newTitle = url.split("=");
    newTitle.pop(newTitle.length - 1);
    newTitle = newTitle.toString();
    newTitle = newTitle.split("_");
    newTitle = newTitle.join(" ");
    return newTitle;
  };

  useEffect(() => {
    axios
      .get(
        `${UNSPLASH_BASE_URL}/collections/${addId(
          id
        )}/photos/?client_id=${UNSPLASH_ACCESS_KEY}`
      )
      .then((res) => {
        const getData = res.data;
        setData(getData);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <Subheader>
          <h1 as="h2">{addSubtitle(id)}</h1>
          <NavLink to="/">
            <Button variant="primary">Back</Button>
          </NavLink>
        </Subheader>
        <CardColumns as="main">
          {data.map((item) => (
            <PhotoCards
              key={item.id}
              cardId={item.id}
              cardPhotoUrls={item.urls}
            />
          ))}
        </CardColumns>
      </Container>
    </>
  );
};

export default Collection;
