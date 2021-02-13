import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "./App.css";
import Home from "./Home";
import Collection from "./Collection";
import Contact from "./Contact";
import Photo from "./Photo";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/collection/:id/:id">
            <Photo />
          </Route>
          <Route path="/collection/:id">
            <Collection />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
