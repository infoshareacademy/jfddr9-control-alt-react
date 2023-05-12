import { Button, Card } from "react-bootstrap";
import { SearchByName } from "../SearchByName";

import { Carousel } from "../Carousel";

import { useState } from "react";

export const MixIt = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  function toggleShowSearch() {
    document.getElementById("searchPanel").classList.toggle("show");
  }
  function toggleShowDrink() {
    document.getElementById("drinkPanel").classList.toggle("show");
  }
  return (
    <>
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

      <div id="carouselPanel" class="sidepanel">
        <Carousel toggleShowSearch={toggleShowSearch} />
      </div>

      <div id="searchPanel" class="sidepanel">
        <h1>Mixit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure natus
          rem optio delectus explicabo ab reiciendis. Explicabo laboriosam vitae
          unde dolorem, enim corporis!
        </p>
        <SearchByName
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>

      <div id="drinkPanel" class="sidepanel">
        {!(selectedOption === null) && (
          <div>
            <h1>{selectedOption.label}</h1>
            <p>{selectedOption.description}</p>
          </div>
        )}
      </div>
      <div>
        {!(selectedOption === null) && (
          <Button
            className="general-btn green-hover"
            onClick={() => {
              toggleShowDrink();
              toggleShowSearch();
            }}
          >
            Show your drink
          </Button>
        )}
      </div>
    </>
  );
};
