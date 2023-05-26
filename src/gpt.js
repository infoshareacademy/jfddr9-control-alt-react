import { Configuration, OpenAIApi } from "openai";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./api/firebase";

//getting API key from firestoree
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

// If it cuts answears increase max_tokens
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
    const openai = new OpenAIApi(configuration);

    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: `Tell funny and very brief story of ${drinkName} cocktail, use up to 50 words`,
        max_tokens: 100,
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
