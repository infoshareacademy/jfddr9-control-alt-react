import { useState } from "react";
import { drinkPanelID } from "./pages/MixIt";

export const SearchRandom = ({ setSelectedOption, changeView }) => {
  const [drink, setDrink] = useState(null);

  const fetchRandomDrink = async () => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      const data = await response.json();
      const randomDrink = data.drinks.map((drink) => {
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
      setSelectedOption(randomDrink[0]);
      console.log(randomDrink);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          fetchRandomDrink();
          changeView(drinkPanelID);
        }}
      >
        Random Drink
      </button>
      {/* {drink &&
        drink.map((drinkItem) => (
          <div key={drinkItem.drinkId}>
            <h4>Name: {drinkItem.drinkName}</h4>
            <p>Ingredients: {drinkItem.ingredients.join(", ")}</p>
            <p>Description: {drinkItem.description}</p>
          </div>
        ))} */}
    </div>
  );
};
