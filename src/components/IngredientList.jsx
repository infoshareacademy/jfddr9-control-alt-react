import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
const Listitem = ({ ingredient, count, glassPour }) => {
  const [visible, setVisible] = useState("");

  const show = async (ms) => {
    await new Promise((pr) => setTimeout(pr, ms));
    setVisible("show");
    glassPour();
  };
  useEffect(() => {
    show(1000 * count);
  }, []);
  console.log(ingredient);

  return <li className={`ingredient ${visible}`}>{ingredient}</li>;
};
export const IngredientList = ({ list, glassPour }) => {
  let count = 1;
  const [showList, setShowList] = useState(false);
  return (
    <div>
      <h4>Ingredients</h4>
      <Button
        className="general-btn green-hover"
        onClick={() => setShowList(true)}
      >
        Mix
      </Button>
      {showList && (
        <ul className="ingredients">
          {list.map((ingredient) => {
            // glassPour();
            count = count + 1;
            return (
              <Listitem
                key={ingredient + count}
                ingredient={ingredient}
                count={count}
                glassPour={glassPour}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
