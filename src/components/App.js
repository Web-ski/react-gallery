import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDeck from "react-bootstrap/CardDeck";
import "./App.css";
import Header from "./Header";
import Cards from "./Cards";
import { UNSPLASH_BASE_URL } from "../constants";
import { UNSPLASH_ACCESS_KEY } from "../accesses";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${UNSPLASH_BASE_URL}/photos/?client_id=${UNSPLASH_ACCESS_KEY}`)
      .then((res) => {
        const getData = res.data;
        setData(getData);
        console.log(getData);
      });
  }, []);

  return (
    <>
      <Header name="My React Gallery" />
      <CardDeck>
        {data.map((item) => (
          <Cards key={item.id} cardId={item.id} />
        ))}
      </CardDeck>
    </>
  );
}

export default App;
