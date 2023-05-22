import { useState, useEffect } from "react";
import Select from "react-select";
export const fetchNameSearchOptions = async (setFunction, inputName) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputName}`
    );
    const data = await response.json();
    const drinks = await data.drinks.map((drink) => {
      const ingredients = Object.keys(drink)
        .filter((key) => key && key.startsWith("strIngredient"))
        .map((ingredient) => drink[ingredient])
        .filter(Boolean);
      return {
        value: drink.idDrink,
        label: drink.strDrink,
        description: drink.strInstructions,
        ingredients: ingredients,
      };
    });
    setFunction(drinks);
  } catch (error) {
    console.error(error);
  }
};
export const SearchByName = ({ selectedOption, setSelectedOption }) => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchNameSearchOptions(setSearchOptions, input);
  }, [input]);
  return (
    <Select
      className="select-bar"
      value={selectedOption}
      onInputChange={(e) => {
        setInput(e);
      }}
      options={searchOptions}
      onChange={(e) => {
        setSelectedOption(e);
      }}
      placeholder="Search for a cocktail..."
      isClearable
    />
  );
};
