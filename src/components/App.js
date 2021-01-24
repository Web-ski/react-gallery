import React, { useState, useEffect } from "react";
import axios from "axios";
import CardColumns from "react-bootstrap/CardColumns";
import "./App.css";
import Header from "./Header";
import Cards from "./Cards";
import { UNSPLASH_BASE_URL } from "../constants";
import { UNSPLASH_ACCESS_KEY } from "../accesses";

function App() {
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

export default App;
