import { Configuration, OpenAIApi } from "openai";

//TODO get key from firebase
const configuration = new Configuration({
  apiKey: "",
});
const openai = new OpenAIApi(configuration);
// Jesli ucina odpowiedzi zwieksz max_tokens
export async function describeDrink(
  drinkName,
  setFunction,
  processSetFuncation
) {
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
}
