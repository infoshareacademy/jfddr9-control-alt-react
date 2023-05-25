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
      const measures = Object.keys(drink)
        .filter((key) => key && key.startsWith("strMeasure"))
        .map((measure) => drink[measure])
        .filter(Boolean);

      const ingredientsWithMeasures = ingredients.map((ingredient, index) => {
        const measure = measures[index] || "";
        return `${measure} ${ingredient}`;
      });

      return {
        value: drink.idDrink,
        label: drink.strDrink,
        description: drink.strInstructions,
        ingredients: ingredientsWithMeasures,
      };
    });

    setFunction(drinks);
  } catch (error) {
    console.error(error);
  }
};
export const SearchByName = ({
  selectedOption,
  setSelectedOption,
  viewName,
}) => {
  const [searchOptions, setSearchOptions] = useState([]);
  const [input, setInput] = useState("");
  const [shownOption, setShownOption] = useState("");
  useEffect(() => {
    setShownOption("");
  }, [viewName]);

  useEffect(() => {
    fetchNameSearchOptions(setSearchOptions, input);
  }, [input]);
  return (
    <Select
      className="select-bar"
      value={shownOption}
      onInputChange={(e) => {
        setInput(e);
      }}
      options={searchOptions}
      onChange={(e) => {
        setSelectedOption(e);
        setShownOption(e);
      }}
      placeholder="Search for a cocktail..."
      isClearable
    />
  );
};
