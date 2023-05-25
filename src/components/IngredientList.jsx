import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
const Listitem = ({ ingredient, count, glassPour }) => {
  const [visible, setVisible] = useState("");

  const show = async (count) => {
    await new Promise((pr) => setTimeout(pr, count * 1000));
    setVisible("show");
    glassPour(count);
  };
  useEffect(() => {
    show(count);
  }, []);

  return <li className={`ingredient ${visible}`}>{ingredient}</li>;
};
export const IngredientList = ({ list, glassPour }) => {
  let count = 0;

  return (
    <div>
      <h4>Ingredients</h4>

      <ul className="ingredients">
        {list.map((ingredient) => {
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
    </div>
  );
};
