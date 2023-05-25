import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { auth, db } from "../api/firebase";
import { updateDoc, doc, getDoc } from "firebase/firestore";
export const FavouriteDrinkButton = ({
  selectedOption,
  isFavorite,
  setIsFavorite,
}) => {
  library.add(far);
  const [hover, setHover] = useState(false);

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

  useEffect(() => {
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
      }

      await updateDoc(userRef, { favorites: updatedFavorites });
      setIsFavorite(!isFavorite);
    }
  };
  return (
    <>
      <FontAwesomeIcon
        icon={
          isFavorite
            ? hover
              ? "fa-solid fa-xmark"
              : ["fas", "heart"]
            : ["far", "heart"]
        }
        onClick={() => {
          handleFavoriteClick();
        }}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        size="2x"
      />
    </>
  );
};
