import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import Results from "./Results";
import useDropdown from "./useDropdown";
import ThemeContext from "./ThemeContext";

const SearchParams = () => {
  // setLocation is the updater for location
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  // * Async Function to request Pets
  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    // * set pets state to object {animals}, as defined above
    setPets(animals || []);
  }

  useEffect(
    () => {
      // * Clears out Breeds
      setBreeds([]);
      setBreed("");

      // * Breeds request
      pet.breeds(animal).then(({ breeds }) => {
        const breedStrings = breeds.map(({ name }) => name);
        setBreeds(breedStrings);
      }, console.error);
    },
    /* useEffect dependencies */ [animal, setBreed, setBreeds]
  );

  return (
    <div className="search-params">
      <form
        onSubmit={event => {
          event.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={event => setLocation(event.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <labal htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={event => setTheme(event.target.value)}
            onBlur={event => setTheme(event.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="darkblue">Dark Blue</option>
            <option value="mediumorchid">Medium Orchid</option>
            <option value="green">Green</option>
          </select>
        </labal>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
