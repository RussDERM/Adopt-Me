JSX removes the layer of translation that JS has in order for React to use it, turning

```sh
return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
```

into

```sh
return (
  <div>
    <h1>{name}</h1>
    <h2>{animal}</h2>
    <h2>{breed}</h2>
  </div>
)
```

Why do we need JSX to be enclosed?

Javascript cannot return more than one object, it must return a single object.

ESLINT CONFIG
This order is important, eslint:recc... on top so everything is turned on, then plugin info afterwards to shut specific things off

```sh
  "extends": [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react"
  ],
```

##### ANYTHING THAT CAN BE ON THE RIGHT SIDE OF AN EQUALS SIGN IS CONSIDERED AN EXPRESSION

---

---

# HOOKS

### First - State & forms

event targets are what allows React to re-render a page with each keystroke that a user makes. They look like this

```sh
onChange={event => setLocation(event.target.value)}
```

SO

useState is creating a hook. When you get back a hook, you're receiving an array. The first thing is the original state, the next is the updated state, just like below

```sh
const [location, setLocation] = useState("Seattle, WA");
```

location is the original value, and what is referenced by your code to extract the user's value. setLocation is what is used to update location with each and every keystroke. CREEPY

Hooks never go inside of If statemets, or for loops
