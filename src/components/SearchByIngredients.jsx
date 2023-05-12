import { useState, useEffect } from "react";
import Select from "react-select";

export const SearchByIngredients = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchOptions, setSearchOptions] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchIngredientSearchOptions = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`
        );
        const data = await response.json();
        const ingredients = data.drinks.map((drink) => ({
          value: drink.strIngredient1,
          label: drink.strIngredient1,
        }));
        console.log(ingredients);
        setSearchOptions(ingredients);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredientSearchOptions();
  }, [selectedOptions]);

  return (
    <Select
      className="select-bar"
      isMulti
      value={selectedOptions}
      onInputChange={(e) => {
        setSelectedOptions(e);
      }}
      options={searchOptions}
      onChange={(e) => {
        console.log(e);
        setSelectedOptions(e);
      }}
      placeholder="Search for an ingredient..."
      isClearable
    />
  );
};
