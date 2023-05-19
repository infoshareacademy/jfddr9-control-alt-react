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

export const FavoriteDrinksUserPanel = () => {
  library.add(far);
  const [favoriteDrinkNames, setFavoriteDrinkNames] = useState([]);
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
          if (drinkDoc && drinkDoc.exists()) {
            return {
              id: drinkDoc.data().idDrink || 0,
              name: drinkDoc.data().strDrink || "",
            };
          }
          return null;
        });
      }
      setFavoriteDrinkNames(drinkNames.filter(Boolean));
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    fetchFavoriteDrinkNames();
  }, []);
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
      await updateDoc(userRef, { favorites: updatedFavorites });
    }
    fetchFavoriteDrinkNames();
  };
  console.log(favoriteDrinkNames);
  return (
    <>
      <div>
        {favoriteDrinkNames.length > 0 ? (
          <>
            <h1>Favourite drinks</h1>
            {favoriteDrinkNames.map((drink) => {
              return (
                <div key={drink.id} className="centered-row">
                  <p>{drink.name} </p>

                  <FontAwesomeIcon
                    icon={["fas", "heart"]}
                    onClick={() => {
                      handleFavoriteClick(drink.id);
                    }}
                    size="2x"
                  />
                </div>
              );
            })}
          </>
        ) : (
          <h3>No favorite drinks</h3>
        )}
      </div>
    </>
  );
};