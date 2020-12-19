import GroceryInput from "./components/GroceryInput";
import GroceryList from "./components/GroceryList";
import { GroceryProvider } from "./stores/StoreProvider";

function App() {
  return (
    <>
      <GroceryProvider>
        <h1>Grocery List</h1>
        <GroceryInput />
        <GroceryList />
      </GroceryProvider>
    </>
  );
}

export default App;
