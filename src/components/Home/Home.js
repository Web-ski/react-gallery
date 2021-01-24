import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import CardColumns from "react-bootstrap/CardColumns";
import Cards from "./Cards";
import { UNSPLASH_BASE_URL } from "./constants";
import { UNSPLASH_ACCESS_KEY } from "./accesses";

function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${UNSPLASH_BASE_URL}/collections/?client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => {
        const getData = res.data;
        setData(getData);
        console.log(getData);
      });
  }, []);

  return (
    <>
      <Header name="My React Gallery" />
      <CardColumns>
        {data.map((item) => (
          <Cards
            key={item.id}
            cardTitle={item.title}
            cardDescription={item.description}
            cardCoverPhoto={item.cover_photo}
          />
        ))}
      </CardColumns>
    </>
  );
}

export default Home;
