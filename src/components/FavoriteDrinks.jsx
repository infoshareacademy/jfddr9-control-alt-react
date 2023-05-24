import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { auth, db } from "../api/firebase";
import {
  query,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  collection,
  where,
} from "firebase/firestore";
import { drinkPanelID } from "./pages/MixIt";
import { createToast } from "../App";

export const FavoriteDrinks = ({
  isFavorite,
  setSelectedOption,
  changeView,
  viewName,
  selectedOption,
}) => {
  const [favoriteDrinkNames, setFavoriteDrinkNames] = useState([]);
  library.add(far);
  const fetchFavoriteDrinkNames = async () => {
    const userId = auth.currentUser.uid;
    const userRef = doc(db, "users", userId);

    try {
      const userDoc = await getDoc(userRef);
      let drinkNames = [];

      if (userDoc.exists()) {
        const favorites = userDoc.data().favorites || [];
        const queries = favorites.map((idDrink) => {
          return query(
            collection(db, "cocktails"),
            where("idDrink", "==", idDrink)
          );
        });

        const querySnapshot = await Promise.all(queries.map(getDocs));

        drinkNames = querySnapshot.map((snapshot) => {
          const drinkDoc = snapshot.docs[0];

          const ingredients = [];
          const measures = [];
          if (drinkDoc && drinkDoc.exists()) {
            Object.entries(drinkDoc.data()).forEach(([key, value]) => {
              if (key.startsWith("strIngredient") && value) {
                const ingredientIndex = parseInt(
                  key.replace("strIngredient", ""),
                  10
                );
                const measureKey = `strMeasure${ingredientIndex}`;
                const measure = drinkDoc.data()[measureKey] || "";

                ingredients.push(value);
                measures.push(measure);
              }
            });

            const ingredientsWithMeasures = ingredients.map(
              (ingredient, index) => {
                const measure = measures[index] || "";
                return `${measure} ${ingredient}`;
              }
            );
            return {
              value: drinkDoc.data().idDrink,
              label: drinkDoc.data().strDrink,
              description: drinkDoc.data().strInstructions,
              ingredients: ingredientsWithMeasures,
            };
          }
          return null;
        });
      }
      setFavoriteDrinkNames(drinkNames.filter(Boolean));
    } catch (error) {
      // createToast(error)
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchFavoriteDrinkNames();
  }, [isFavorite]);
  const handleFavoriteClick = async (drinkID) => {
    const userId = auth.currentUser.uid;
    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const favorites = userData.favorites || [];
      const updatedFavorites = favorites.filter(
        (idDrink) => idDrink !== drinkID
      );
      // if (drinkID == selectedOption.value) setSelectedOption(null);
      await updateDoc(userRef, { favorites: updatedFavorites });
    }
    fetchFavoriteDrinkNames();
  };
  return (
    <>
      <div>
        {favoriteDrinkNames.length > 0 ? (
          <>
            {favoriteDrinkNames.map((strDrink) => {
              return (
                <div key={strDrink.value} className="centered-row">
                  <FontAwesomeIcon
                    icon={["fas", "heart"]}
                    onClick={() => {
                      handleFavoriteClick(strDrink.value);
                    }}
                    size="2x"
                  />
                  <p
                    onClick={() => {
                      setSelectedOption(strDrink);
                      changeView(drinkPanelID);
                    }}
                  >
                    {strDrink.label}
                  </p>
                </div>
              );
            })}
          </>
        ) : (
          <h3>No favourite drinks</h3>
        )}
      </div>
    </>
  );
};
