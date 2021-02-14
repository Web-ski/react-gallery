import React, { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
// import Header from "../Header";
import Subheader from "../Subheader";
import StartInfo from "../StartInfo";
import CardColumns from "react-bootstrap/CardColumns";
import CollectionsCards from "../CollectionsCards";
import { UNSPLASH_BASE_URL } from "../../constants";
import { UNSPLASH_ACCESS_KEY } from "../../accesses";

const subheaderStyle = {
  margin: "0px auto 20px",
};

const Home = () => {
  const [data, setData] = useState();
  const [choosenImage, setChoosenImage] = useState();

  useEffect(() => {
    axios
      .get(`${UNSPLASH_BASE_URL}/collections/?client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => {
        const getData = res.data;
        setData(getData);
      });
  }, []);

  useEffect(() => {
    let image;
    if (data !== undefined) {
      image = Math.floor(Math.random() * data.length);
      setChoosenImage(data[image].cover_photo.urls.raw);
    }
  }, [data]);

  return (
    <div style={{ backgroundColor: "#eeeeee", paddingTop: "30px" }}>
      {/* <Header /> */}
      <Container>
        <StartInfo image={choosenImage && choosenImage} />
        <Subheader>
          <h1 style={subheaderStyle} as="h2">
            Collections
          </h1>
        </Subheader>
        <CardColumns>
          {data &&
            data.map((item) => (
              <CollectionsCards
                key={item.id}
                cardId={item.id}
                cardTitle={item.title}
                cardDescription={item.description}
                cardCoverPhoto={item.cover_photo}
              />
            ))}
        </CardColumns>
      </Container>
    </div>
  );
};

export default Home;
