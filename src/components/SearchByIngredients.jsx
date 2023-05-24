import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { debounce } from "lodash";

export const SearchByIngredients = ({ selectedOption, setSelectedOption }) => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [matchingCocktails, setMatchingCocktails] = useState([]);
  const [isFetchingCocktails, setIsFetchingCocktails] = useState(false);
  const [cooldown, setCooldown] = useState(false);

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

  const debouncedFetchCocktails = useCallback(
    debounce(async () => {
      if (selectedIngredients.length === 0) {
        setMatchingCocktails([]);
        return;
      }

      if (cooldown) {
        return;
      }

      setIsFetchingCocktails(true);
      setCooldown(true);

      const fetchCocktailDetails = async (ingredient) => {
        try {
          const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient.value}`
          );
          const data = await response.json();
          const matchingCocktailIds = data.drinks.map((drink) => drink.idDrink);
          return matchingCocktailIds;
        } catch (error) {
          console.error(error);
          return [];
        }
      };

      try {
        const matchingCocktailIds = await Promise.all(
          selectedIngredients.map((ingredient) =>
            fetchCocktailDetails(ingredient)
          )
        );

        const intersection = matchingCocktailIds.reduce((a, b) =>
          a.filter((c) => b.includes(c))
        );

        if (intersection.length === 0) {
          setMatchingCocktails([]);
          return;
        }

        const fetchCocktail = async (id) => {
          try {
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await response.json();
            return data.drinks[0];
          } catch (error) {
            console.error(error);
            return null;
          }
        };

        const matchingCocktailsData = await Promise.all(
          intersection.map((id) => fetchCocktail(id))
        );

        const matchingCocktailsList = matchingCocktailsData.filter(Boolean);
        const drinks = matchingCocktailsList.map((drink) => {
          const ingredients = Object.keys(drink)
            .filter((key) => key && key.startsWith("strIngredient"))
            .map((ingredient) => drink[ingredient])
            .filter(Boolean);

          const measures = Object.keys(drink)
            .filter((key) => key && key.startsWith("strMeasure"))
            .map((measure) => drink[measure])
            .filter(Boolean);

          const ingredientsWithMeasures = ingredients.map(
            (ingredient, index) => {
              const measure = measures[index] || "";
              return `${measure} ${ingredient}`;
            }
          );

          return {
            value: drink.idDrink,
            label: drink.strDrink,
            description: drink.strInstructions,
            ingredients: ingredientsWithMeasures,
          };
        });

        setMatchingCocktails(drinks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetchingCocktails(false);

        // Wait for 2 seconds before resetting the cooldown
        setTimeout(() => {
          setCooldown(false);
        }, 2000);
      }
    }, 1000),
    [selectedIngredients]
  );

  useEffect(() => {
    debouncedFetchCocktails();

    return () => {
      debouncedFetchCocktails.cancel();
    };
  }, [debouncedFetchCocktails]);

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
        options={matchingCocktails}
        onChange={setSelectedOption}
        placeholder="Search for a cocktail..."
        isClearable
        isLoading={isFetchingCocktails}
      />
    </div>
  );
};
