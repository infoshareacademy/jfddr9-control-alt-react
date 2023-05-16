export const IngredientList = ({ list }) => {
  return (
    <div>
      <h4>Ingredients</h4>
      <ul className="ingredient-list">
        {list.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
};
