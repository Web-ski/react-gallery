import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useParams, useRouteMatch } from "react-router-dom";
import Header from "../Header";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { UNSPLASH_BASE_URL } from "../../constants";
import { UNSPLASH_ACCESS_KEY } from "../../accesses";

const Photo = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  let { url } = useRouteMatch();

  const addReturnUrl = (matchedUrl) => {
    let newUrl = matchedUrl.split("/").filter((item) => item !== id);
    return newUrl.join("/");
  };

  useEffect(() => {
    axios
      .get(
        `${UNSPLASH_BASE_URL}/photos/${id}/?client_id=${UNSPLASH_ACCESS_KEY}`
      )
      .then((res) => {
        const getData = res.data;
        setData(getData);
        //console.log(getData);
      });
  }, [id]);

  return (
    <>
      <Header />
      <Container>
        <Card style={{ margin: "20px 0" }}>
          <Card.Img variant="top" src={data && data.urls.full} />
          <Card.Body>
            <Card.Text>{data && data.user.name}</Card.Text>
            <Card.Text>"{data && data.description}"</Card.Text>
            <NavLink to={addReturnUrl(url)}>
              <Button variant="primary">Back</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Photo;
