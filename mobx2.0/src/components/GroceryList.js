import { useObserver } from "mobx-react";
import { useGroceryStore } from "../stores/StoreProvider.js";

const GroceryList = () => {
  const groceryStore = useGroceryStore();

  return useObserver(() => (
    <ul>
      {groceryStore.groceryList.map((item) => {
        return (
          <li key={item.id}>
            {item.groceryItem}
            <button onClick={() => groceryStore.removeGroceryItem(item.id)}>
              Remove Item
            </button>
          </li>
        );
      })}
    </ul>
  ));
};

export default GroceryList;
