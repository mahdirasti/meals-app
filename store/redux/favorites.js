import { createSlice } from "@reduxjs/toolkit"

const favoriteSlice = createSlice({
  name: "FavoriteMeals",
  initialState: {
    ids: []
  },
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id)
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})

export const favoriteActions = {
  addFavorite: favoriteSlice.actions.addFavorite,
  removeFavorite: favoriteSlice.actions.removeFavorite
}

export default favoriteSlice.reducer
