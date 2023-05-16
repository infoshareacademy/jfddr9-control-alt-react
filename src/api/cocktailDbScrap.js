import { db } from "../api/firebase";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const cocktailDbScrap = async () => {
  const lettersAndNumbers = [..."abcdefghijklmnopqrstuvwxyz0123456789"];

  const fetchCocktailsToFirestore = async (letter) => {
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
      );
      const { drinks } = await response.json();

      if (!drinks) {
        console.log(`No cocktails found for letter ${letter}`);
        return;
      }

      for (const drink of drinks) {
        // Check if cocktail already exist
        const q = query(
          collection(db, "cocktails"),
          where("idDrink", "==", drink.idDrink)
        );
        const existingCocktail = await getDocs(q);

        if (!existingCocktail.empty) {
          console.log(`Cocktail ${drink.strDrink} already exists`);
          continue;
        }

        // Add cocktail to database
        await addDoc(collection(db, "cocktails"), drink);
        console.log(`Added cocktail ${drink.strDrink} to database`);
      }
    } catch (error) {
      console.error(`Error fetching cocktails for letter ${letter}:`, error);
    }
  };

  for (const letter of lettersAndNumbers) {
    await fetchCocktailsToFirestore(letter);
  }
};
