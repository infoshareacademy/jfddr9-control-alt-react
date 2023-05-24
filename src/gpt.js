import { Configuration, OpenAIApi } from "openai";
//TODO get key from firebase
const configuration = new Configuration({
  apiKey: "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",
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
      prompt: `Describe cocktail named ${drinkName}`,
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
