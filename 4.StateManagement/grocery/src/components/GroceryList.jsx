export const GroceryList = ({ name, id, handleRemove }) => {
  return (
    <>
      <div>ITEM = {name} || </div>
      <button onClick={handleRemove}>Remove Item</button>
    </>
  );
};
