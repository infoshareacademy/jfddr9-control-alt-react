import { Button } from "react-bootstrap";
import { SearchByName } from "../SearchByName";
import { SearchByIngredients } from "../SearchByIngredients";
import { SidePanel } from "../SidePanel";
import { Carousel } from "../Carousel";
import { useEffect, useState } from "react";
import { IngredientList } from "../IngredientList";
import { SearchRandom } from "../SearchRandom";
import { FavoriteDrinks } from "../FavoriteDrinks";
import { FavouriteDrinkButton } from "../FavouriteDrinkButton";

export const nameSearchID = "searchByNamePanel";
export const ingredientSearchID = "searchByIngredientPanel";
export const drinkPanelID = "drinkPanel";
export const searchRandomPanelID = "randomDrinkPanel";
export const favoritesPanelID = "favoritesPanel";

export const MixIt = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [viewName, setViewName] = useState("");
  const [previousViewName, setPreviousViewName] = useState("");
  const [favoriteDrinkNames, setFavoriteDrinkNames] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  function changeView(newViewName) {
    setPreviousViewName(viewName);
    setViewName(newViewName);
  }

  function hideAll() {
    let views = document.querySelectorAll(".show");
    views.forEach((element) => {
      if (element !== null) element.classList.remove("show");
    });
  }
  useEffect(() => {
    hideAll();
    let shown = document.getElementById(viewName);
    if (shown !== null) shown.classList.add("show");
  }, [viewName]);

  return (
    <>
      {/* --- Carousel --- */}
      <div id="carouselPanel" className="sidepanel no-padding">
        <Carousel changeView={changeView} />
      </div>
      {/* --- Center - glass and drink --- */}
      <div className="mixit-main">
        <div className="mixit-background">
          <div className="mixit-background-table"></div>
        </div>
        <div className="glass">
          <div className="cylinder">
            <div className="water"></div>
          </div>
        </div>
      </div>
      {/* --- Side panels --- */}
      <SidePanel
        id={nameSearchID}
        title={"Search By Name"}
        description={"Choose your drink"}
        child={
          <SearchByName
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        }
      ></SidePanel>

      <SidePanel
        id={ingredientSearchID}
        title={"Search By Ingredients"}
        description={"Choose your ingredients"}
        child={
          <SearchByIngredients
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        }
      ></SidePanel>

      <SidePanel
        id={searchRandomPanelID}
        title={"Choose random drink"}
        child={
          <SearchRandom
            setSelectedOption={setSelectedOption}
            changeView={changeView}
          />
        }
      ></SidePanel>

      <SidePanel
        id={favoritesPanelID}
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

      <SidePanel
        id={drinkPanelID}
        title={selectedOption !== null ? selectedOption.label : ""}
        description={selectedOption !== null ? selectedOption.description : ""}
        child={
          <>
            {selectedOption !== null ? (
              <IngredientList list={selectedOption.ingredients} />
            ) : (
              <div></div>
            )}
            <FavouriteDrinkButton
              selectedOption={selectedOption}
              isFavorite={isFavorite}
              setIsFavorite={setIsFavorite}
            />
          </>
        }
      ></SidePanel>

      {/* --- Bottom buttons --- */}
      <div className="bottom-buttons-div">
        {!(selectedOption === null) && (
          <Button
            className="general-btn green-hover"
            onClick={() => {
              viewName === "drinkPanel"
                ? changeView(previousViewName)
                : changeView(drinkPanelID);
            }}
          >
            {viewName === "drinkPanel"
              ? "Go back to search"
              : "Show your drink"}
          </Button>
        )}
      </div>
    </>
  );
};
