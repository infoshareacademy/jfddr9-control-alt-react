import { Button, Card } from "react-bootstrap";
import { SearchByName } from "../SearchByName";
import { SearchByIngredients } from "../SearchByIngredients";
import { SidePanel } from "../SidePanel";
import { Carousel } from "../Carousel";

import { useState } from "react";
import { SearchRandom } from "../SearchRandom";

export const MixIt = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [viewName, setViewName] = useState("");
  const [previousViewName, setPreviousViewName] = useState("");

  function hideAll() {
    let views = document.querySelectorAll(".show");
    views.forEach((element) => {
      if (element !== null) element.classList.remove("show");
    });
    setViewName("");
  }
  function toggleShow(newViewName) {
    setPreviousViewName(viewName);
    hideAll();
    setViewName(newViewName);
    let shown = document.getElementById(newViewName);
    if (shown !== null) shown.classList.add("show");
  }

  return (
    <>
      {/* --- Carousel --- */}
      <div id="carouselPanel" class="sidepanel no-padding">
        <Carousel toggleShow={toggleShow} />
      </div>
      {/* --- Center - glass and drink --- */}
      <div class="mixit-main">
        <div class="mixit-background">
          <div class="mixit-background-table"></div>
        </div>
        <div class="glass">
          <div class="cylinder">
            <div class="water"></div>
          </div>
        </div>
      </div>
      {/* --- Side panels --- */}
      <SidePanel
        id={"searchByNamePanel"}
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
        id={"searchByIngredientPanel"}
        title={"Search By Ingredients"}
        description={"Choose your ingredients"}
        child={<SearchByIngredients />}
      ></SidePanel>

      <SidePanel
        id={"searchRandomPanel"}
        title={"Choose random drink"}
        //description={"Choose random drink"}
        child={<SearchRandom />}
      ></SidePanel>

      <SidePanel
        id={"drinkPanel"}
        title={selectedOption !== null ? selectedOption.label : ""}
        description={selectedOption !== null ? selectedOption.description : ""}
      ></SidePanel>

      {/* --- Bottom buttons --- */}
      <div class="bottom-buttons-div">
        {!(selectedOption === null) && (
          <Button
            className="general-btn green-hover"
            onClick={() => {
              viewName === "drinkPanel"
                ? toggleShow(previousViewName)
                : toggleShow("drinkPanel");
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
