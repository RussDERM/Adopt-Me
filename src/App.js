const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", [], "Adopt Me!"),
    React.createElement(Pet, {
      name: "Taven",
      animal: "Dog",
      breed: "pitbull"
    }),
    React.createElement(Pet, {
      name: "Jax",
      animal: "Dog",
      breed: "pitbull"
    }),
    React.createElement(Pet, { name: "Marlee", animal: "Cat", breed: "Tabby" })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
