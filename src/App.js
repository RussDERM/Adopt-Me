import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
// import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Ponyo" animal="Goldfish" breed="Unknown" />
        <Pet name="Onyx" animal="Cat" breed="Black" />
        <Pet name="Taven" animal="Dog" breed="Pitbull" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
