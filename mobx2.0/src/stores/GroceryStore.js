import { nanoid } from 'nanoid'

const createGroceryStore = () => {
  return({
    groceryList: [],
    addGroceryItem(groceryItem) {
      this.groceryList.push({
        groceryItem,
        id: nanoid()
      })
    },
    removeGroceryItem(id) {
      this.groceryList = this.groceryList.filter(groceryItem => groceryItem.id !== id)
    }
  })
}

export default createGroceryStore