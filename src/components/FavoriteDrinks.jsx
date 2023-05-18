import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { auth, db } from "../api/firebase";
import {
  updateDoc,
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

export const FavoriteDrinks = ({ selectedOption, currentView }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  library.add(far);

  useEffect(() => {
    const checkIfFavorite = async () => {
      const userId = auth.currentUser.uid;

      const userRef = doc(db, "users", userId);

      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const favorites = userData.favorites || [];
        const isFavorite = favorites.includes(selectedOption.value);
        setIsFavorite(isFavorite);
      }
    };

    if (selectedOption) {
      checkIfFavorite();
    }
  }, [selectedOption]);

  const handleFavoriteClick = async () => {
    const userId = auth.currentUser.uid;

    const userRef = doc(db, "users", userId);

    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      const favorites = userData.favorites || [];

      let updatedFavorites;
      if (isFavorite) {
        updatedFavorites = favorites.filter(
          (idDrink) => idDrink !== selectedOption.value
        );
      } else {
        updatedFavorites = [...favorites, selectedOption.value];
        console.log(selectedOption.value);
      }

      await updateDoc(userRef, { favorites: updatedFavorites });
      setIsFavorite(!isFavorite);
    }
  };

  const [favoriteDrinkNames, setFavoriteDrinkNames] = useState([]);

  useEffect(() => {
    const fetchFavoriteDrinkNames = async () => {
      const userId = auth.currentUser.uid;
      //console.log(userId);
      const userRef = doc(db, "users", userId);

      try {
        const userDoc = await getDoc(userRef);
        //console.log(userDoc);

        let drinkNames = [];
        if (userDoc.exists()) {
          // ulubione drinki
          const favorites = userDoc.data().favorites || [];
          console.log(favorites);

          drinkNames = await Promise.all(
            favorites.map(async (idDrink) => {
              const drinkRef = doc(db, "cocktails", idDrink);
              console.log(idDrink);

              const drinkDoc = await getDoc(drinkRef);
              console.log(drinkDoc);

              if (drinkDoc.exists()) {
                return drinkDoc.data().strDrink || "";
              }
            })
          );
        }

        setFavoriteDrinkNames(drinkNames.filter(Boolean));
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchFavoriteDrinkNames();
  }, []);

  return (
    <>
      {selectedOption !== null && currentView === "drinkPanel" && (
        <FontAwesomeIcon
          icon={isFavorite ? ["fas", "heart"] : ["far", "heart"]}
          onClick={() => {
            handleFavoriteClick();
          }}
          size="2x"
        />
      )}

      {selectedOption !== null && currentView !== "drinkPanel" && (
        <div>
          {favoriteDrinkNames.length > 0 ? (
            favoriteDrinkNames.map((strDrink) => {
              return <p key={strDrink}>{strDrink}</p>;
            })
          ) : (
            <p>No favorite drinks</p>
          )}
        </div>
      )}
    </>
  );
};
