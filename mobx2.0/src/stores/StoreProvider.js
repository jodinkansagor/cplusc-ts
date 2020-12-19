import React, { createContext, useContext } from 'react'
import createGroceryStore from './GroceryStore'
import { useLocalObservable } from 'mobx-react'

const GroceryStoreContext = createContext(null)

export const GroceryProvider = ({ children }) => {
  const groceryStore = useLocalObservable(() => createGroceryStore())

  return (
    <GroceryStoreContext.Provider value={groceryStore}>
      {children}
    </GroceryStoreContext.Provider>
  )
}

export const useGroceryStore = () => useContext(GroceryStoreContext)
