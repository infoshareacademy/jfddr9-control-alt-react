import { useState, useEffect } from "react";
import Select from "react-select";

export const SearchByIngredients = ({ selectedOption, setSelectedOption }) => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchingCocktails, setMatchingCocktails] = useState([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list"
        );
        const data = await response.json();
        const ingredientsList = data.drinks.map((ingredient) => ({
          value: ingredient.strIngredient1,
          label: ingredient.strIngredient1,
        }));
        setIngredients(ingredientsList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredients();
  }, []);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        // If no ingredients are selected, clear the list of matching cocktails.
        if (selectedIngredients.length === 0) {
          setMatchingCocktails([]);
          return;
        }

        // Create an array to store the IDs of cocktails that match all selected ingredients.
        let matchingCocktailIds = [];

        // Fetch the list of cocktails for each selected ingredient and add their IDs
        // to the matchingCocktailIds array.
        for (let i = 0; i < selectedIngredients.length; i++) {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${selectedIngredients[i].value}`
          );
          const data = await response.json();
          // If this is the first ingredient being checked, add all matching cocktail IDs to the array.
          if (i === 0) {
            matchingCocktailIds = data.drinks.map((drink) => drink.idDrink);
          } else {
            // If this is not the first ingredient being checked, remove IDs that are not present in the current response.
            const currentIds = data.drinks.map((drink) => drink.idDrink);
            matchingCocktailIds = matchingCocktailIds.filter((id) =>
              currentIds.includes(id)
            );
          }
        }

        // If no cocktails match all selected ingredients, clear the list of matching cocktails.
        if (matchingCocktailIds.length === 0) {
          setMatchingCocktails([]);
          return;
        }

        // Fetch the details of the matching cocktails using their IDs and set the
        // matchingCocktails state to the resulting array.
        const promises = matchingCocktailIds.map((id) => {
          return fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          );
        });
        const responses = await Promise.all(promises);
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        const matchingCocktailsList = data
          .map((response) => response.drinks[0])
          .filter((drink) => drink);
        const drinks = matchingCocktailsList.map((drink) => {
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
        setMatchingCocktails(drinks);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCocktails();
  }, [selectedIngredients]);

  const [input, setInput] = useState("");

  return (
    <div>
      <Select
        className="select-bar"
        isMulti
        options={ingredients}
        onChange={setSelectedIngredients}
        value={selectedIngredients}
      />
      <Select
        className="select-bar"
        value={selectedOption}
        onInputChange={(e) => {
          setInput(e);
        }}
        options={matchingCocktails}
        onChange={(e) => {
          setSelectedOption(e);
        }}
        placeholder="Search for a cocktail..."
        isClearable
      />
      {/* <ul>
        {matchingCocktails.map((drink) => (
          <li key={drink.idDrink}>{drink.strDrink}</li>
        ))}
      </ul> */}
    </div>
  );
};
