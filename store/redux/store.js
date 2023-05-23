import { configureStore } from "@reduxjs/toolkit"
import favoriteMealIds from "./favorites"
export const store = configureStore({
  reducer: {
    favoriteMeals: favoriteMealIds
  }
})
