// import { db } from "../api/firebase";
// import { collection, query, where, getDocs } from "firebase/firestore";

// export const fetchCocktailById = async (idDrink) => {
//   try {
//     const q = query(
//       collection(db, "cocktails"),
//       where("idDrink", "==", idDrink)
//     );
//     const querySnapshot = await getDocs(q);

//     if (!querySnapshot.empty) {
//       const cocktailDoc = querySnapshot.docs[0];
//       const cocktailData = cocktailDoc.data();
//       console.log("Cocktail details:", cocktailData);
//       return cocktailData;
//     } else {
//       console.log("Cocktail not found");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error fetching cocktail:", error);
//     return null;
//   }
// };
