import { Carousel } from "../Carousel";
import { useState } from "react";
import { SidePanels } from "../SidePanels";
import { Glass } from "../Glass";
import { MixItButton } from "../MixitButton";

export const nameSearchID = "searchByNamePanel";
export const ingredientSearchID = "searchByIngredientPanel";
export const drinkPanelID = "drinkPanel";
export const searchRandomPanelID = "randomDrinkPanel";
export const favoritesPanelID = "favoritesPanel";

export const MixIt = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [viewName, setViewName] = useState("");
  const [previousViewName, setPreviousViewName] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  function changeView(newViewName) {
    setPreviousViewName(viewName);
    setViewName(newViewName);
  }

  return (
    <>
      {/* --- Carousel --- */}
      <div id="carouselPanel" className="sidepanel no-padding">
        <Carousel changeView={changeView} />
      </div>
      {/* --- Center - glass and drink --- */}
      <div className="mixit-main">
        <div className="mixit-background">
          <Glass selectedOption={selectedOption} />
        </div>
      </div>
      {/* --- Right modals --- */}
      <SidePanels
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        changeView={changeView}
        isFavorite={isFavorite}
        viewName={viewName}
        setIsFavorite={setIsFavorite}
      />

      {/* --- Bottom buttons --- */}
      <MixItButton
        selectedOption={selectedOption}
        viewName={viewName}
        changeView={changeView}
        previousViewName={previousViewName}
      />
      {/* <div className="bottom-buttons-div">
        {!(selectedOption === null) && (
          <Button
            className="general-btn green-hover"
            onClick={() => {
              viewName === Panel.DRINK_PANEL
                ? changeView(previousViewName)
                : changeView(Panel.DRINK_PANEL);
            }}
          >
            {viewName === Panel.DRINK_PANEL
              ? "Go back to search"
              : "Show your drink"}
          </Button>
        )}
      </div> */}
    </>
  );
};
