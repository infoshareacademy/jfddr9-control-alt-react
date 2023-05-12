import { useState, useEffect } from "react";
import Select from "react-select";

export const SearchByName = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [searchOptions, setSearchOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchNameSearchOptions = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
        );
        const data = await response.json();
        const drinks = data.drinks.map((drink) => {
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
        setSearchOptions(drinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNameSearchOptions();
  }, [input]);

  //   useEffect(() => {
  //     const fetchNameSearchOptions = async () => {
  //       try {
  //         const response = await fetch(
  //           `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${selectedOption.value}`
  //         );
  //         const data = await response.json();
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchNameSearchOptions();
  //   }, [selectedOption.value]);

  return (
    <Select
      value={selectedOption}
      onInputChange={(e) => {
        setInput(e);
      }}
      options={searchOptions}
      onChange={(e) => {
        console.log(e);
        setSelectedOption(e);
      }}
      placeholder="Search for a cocktail..."
      isClearable
    />
  );
};