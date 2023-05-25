import { Carousel } from "../Carousel";
import { useState } from "react";
import { SidePanels } from "../SidePanels";
import { Glass } from "../Glass";
import { Button } from "react-bootstrap";
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

  return (
    <>
      <div className="mix-container">
        {/* --- Carousel --- */}
        <div id="carouselPanel" className="panels sidepanel-left">
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
        <div className="bottom-buttons-div">
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
        </div>
      </div>
    </>
  );
};
