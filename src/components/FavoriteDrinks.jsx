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

export const FavoriteDrinks = ({ isFavorite }) => {
  const [favoriteDrinkNames, setFavoriteDrinkNames] = useState([]);

  useEffect(() => {
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
              return drinkDoc.data().strDrink || "";
            }
            return null;
          });
        }

        setFavoriteDrinkNames(drinkNames.filter(Boolean));
        console.log(drinkNames);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchFavoriteDrinkNames();
  }, [isFavorite]);

  return (
    <>
      <div>
        {favoriteDrinkNames.length > 0 ? (
          <>
            {favoriteDrinkNames.map((strDrink) => {
              return <p key={strDrink}>{strDrink} </p>;
            })}
          </>
        ) : (
          <h3>No favourite drinks</h3>
        )}
      </div>
    </>
  );
};
