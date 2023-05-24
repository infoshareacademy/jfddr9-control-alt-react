import { Configuration, OpenAIApi } from "openai";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./api/firebase";

//pobieranie klucza z API z firestore
async function getApiKey() {
  const apiDocRef = doc(db, "api", "api");
  const apiDocSnapshot = await getDoc(apiDocRef);

  if (apiDocSnapshot.exists) {
    const apiData = apiDocSnapshot.data();
    return apiData.apiKey;
  } else {
    throw new Error("Nie znaleziono klucza API");
  }
}

//TODO get key from firebase

// Jesli ucina odpowiedzi zwieksz max_tokens
export async function describeDrink(
  drinkName,
  setFunction,
  processSetFuncation
) {
  try {
    const apiKey = await getApiKey();

    const configuration = new Configuration({
      apiKey: apiKey,
    });
    console.log(apiKey);
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `Describe cocktail named ${drinkName} in 50 words`,
        max_tokens: 50,
      })
      .then((response) => {
        processSetFuncation("Done");
        setFunction(response.data.choices[0].text);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}
