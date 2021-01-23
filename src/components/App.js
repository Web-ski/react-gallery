import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Header";
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
      <div>
        {data.map((item, index) => (
          <p>{item.id}</p>
        ))}
      </div>
    </>
  );
}

export default App;
