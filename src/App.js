import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./details";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
