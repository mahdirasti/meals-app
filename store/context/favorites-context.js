import { createContext, useState } from "react"

export const FavoritesContext = createContext({
  ids: [],
  addToFavorite: (id) => {},
  removeFromFavorite: (id) => {}
})

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const addToFavorite = (id) => setFavorites((crt) => [...crt, id])

  const removeFromFavorite = (id) =>
    setFavorites((crt) => crt.filter((favId) => favId !== id))

  const value = {
    ids: favorites,
    addToFavorite,
    removeFromFavorite
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
export default FavoritesProvider
