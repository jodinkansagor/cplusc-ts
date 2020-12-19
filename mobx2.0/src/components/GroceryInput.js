import { toJS } from "mobx"

const { useState } = require("react")
const { useGroceryStore } = require("../stores/StoreProvider")


const GroceryInput = () => {
  const [groceryItem, setGroceryItem] = useState("")
  const groceryStore = useGroceryStore()

  const handleClick = () => {
    groceryStore.addGroceryItem(groceryItem)
    console.log(toJS(groceryStore))
  }


  return(
    <>
    <input
      type="text"
      value={groceryItem}
      onChange={(event) => setGroceryItem(event.target.value)}
      />
    <button onClick={handleClick}>
      Add Grocery Item
    </button>
    </>
  )
}

export default GroceryInput