import { Panel } from "../utils/panels";
import { FavouriteDrinkButton } from "./FavouriteDrinkButton";
import { IngredientList } from "./IngredientList";
import { SearchByIngredients } from "./SearchByIngredients";
import { SearchByName } from "./SearchByName";
import { SearchRandom } from "./SearchRandom";
import { SidePanel } from "./SidePanel";
import { FavoriteDrinks } from "./FavoriteDrinks";
import { GPTDescribeButton } from "./GPTDescribeButton";

export const SidePanels = ({
  selectedOption,
  setSelectedOption,
  changeView,
  isFavorite,
  viewName,
  setIsFavorite,
}) => {
  function glassPour(stepCount) {
    const ingredientsCount = selectedOption.ingredients.length;
    let waterHeightStep = 220 / ingredientsCount;
    let newHeight = 160 - waterHeightStep * stepCount;
    document.documentElement.style.setProperty(
      "--liquid-height",
      `${newHeight}px`
    );
  }

  switch (viewName) {
    case Panel.DRINK_PANEL:
      return (
        <SidePanel
          title={selectedOption !== null ? selectedOption.label : ""}
          description={
            selectedOption !== null ? selectedOption.description : ""
          }
          child={
            <>
              {selectedOption !== null ? (
                <IngredientList
                  list={selectedOption.ingredients}
                  glassPour={glassPour}
                />
              ) : (
                <div></div>
              )}
              <FavouriteDrinkButton
                selectedOption={selectedOption}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
              />
              <GPTDescribeButton selectedOption={selectedOption} />
            </>
          }
        ></SidePanel>
      );

    case Panel.NAME_SEARCH:
      return (
        <SidePanel
          title={"Search By Name"}
          description={"Choose your drink"}
          child={
            <SearchByName
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          }
        ></SidePanel>
      );

    case Panel.INGREDIENTS:
      return (
        <SidePanel
          title={"Search By Ingredients"}
          description={"Choose your ingredients"}
          child={
            <SearchByIngredients
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          }
        ></SidePanel>
      );

    case Panel.SEARCH_RANDOM:
      return (
        <SidePanel
          title={"Choose random drink"}
          child={
            <SearchRandom
              setSelectedOption={setSelectedOption}
              changeView={changeView}
            />
          }
        ></SidePanel>
      );
    case Panel.FAVORITES:
      return (
        <SidePanel
          title={"Favorite drinks"}
          child={
            <>
              <FavoriteDrinks
                isFavorite={isFavorite}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                changeView={changeView}
                viewName={viewName}
              />
            </>
          }
        ></SidePanel>
      );

    default:
      return null;
  }
};
