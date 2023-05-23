import { FavouriteDrinkButton } from "./FavouriteDrinkButton";
import { IngredientList } from "./IngredientList";
import { GPTDescribeButton } from "./GPTDescribeButton";

export const DrinkPanel = (props) => {
  return (
    <>
      {props.selectedOption !== null ? (
        <>
          {" "}
          <IngredientList
            list={props.selectedOption.ingredients}
            glassPour={props.glassPour}
          />
          <GPTDescribeButton selectedOption={props.selectedOption} />
          <div>
            {" "}
            <FavouriteDrinkButton
              selectedOption={props.selectedOption}
              isFavorite={props.isFavorite}
              setIsFavorite={props.setIsFavorite}
            />
          </div>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
