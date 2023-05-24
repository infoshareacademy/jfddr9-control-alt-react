import { Button } from "react-bootstrap";
import { SearchByName } from "../SearchByName";
import { SearchByIngredients } from "../SearchByIngredients";
import { SidePanel } from "../SidePanel";
import { Carousel } from "../Carousel";
import { useState } from "react";
import { IngredientList } from "../IngredientList";
import { SearchRandom } from "../SearchRandom";
import { FavoriteDrinks } from "../FavoriteDrinks";
import { FavouriteDrinkButton } from "../FavouriteDrinkButton";
import { Panel } from "../../utils/panels";

export const MixIt = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [viewName, setViewName] = useState("");
  const [previousViewName, setPreviousViewName] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  function changeView(newViewName) {
    setPreviousViewName(viewName);
    setViewName(newViewName);
  }

  function glassPour(stepCount) {
    const ingredientsCount = selectedOption.ingredients.length;
    let waterHeightStep = 220 / ingredientsCount;
    let newHeight = 160 - waterHeightStep * stepCount;
    document.documentElement.style.setProperty(
      "--liquid-height",
      `${newHeight}px`
    );
    console.log("Glass Pour Fn");
    console.log(newHeight);
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
          {/* <div className='mixit-background-table'></div> */}
          <div className="cup-containter">
            <div className="cup">
              <div className="wave liquid"></div>
              <div className="handle"></div>
              <div className="flow"></div>
            </div>
          </div>
        </div>

        {/* R.I.P STARA SZKLANKA */}
        {/* <div className='glass'>
					<div className='cylinder'>
						<div className='water' id='water'></div>
					</div>
				</div> */}
      </div>
      {/* --- Side panels --- */}
      {viewName === Panel.NAME_SEARCH && (
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
      )}

      {viewName === Panel.INGREDIENTS && (
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
      )}

      {viewName === Panel.SEARCH_RANDOM && (
        <SidePanel
          title={"Choose random drink"}
          child={
            <SearchRandom
              setSelectedOption={setSelectedOption}
              changeView={changeView}
            />
          }
        ></SidePanel>
      )}

      {viewName === Panel.FAVORITES && (
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
      )}

      {viewName === Panel.DRINK_PANEL && (
        <SidePanel
          // isVisible={viewName === Panel.DRINK_PANEL}
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
            </>
          }
        ></SidePanel>
      )}

      {/* --- Bottom buttons --- */}
      <div className="bottom-buttons-div">
        {!(selectedOption === null) && (
          <Button
            className="general-btn green-hover"
            onClick={() => {
              viewName === Panel.DRINK_PANEL
                ? changeView(previousViewName)
                : changeView(Panel.DRINK_PANEL);
              console.log("onclick");
            }}
          >
            {viewName === Panel.DRINK_PANEL
              ? "Go back to search"
              : "Show your drink"}
          </Button>
        )}
      </div>
    </>
  );
};
