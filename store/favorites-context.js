import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext({});

export function useFavoritesContext() {
  return useContext(FavoritesContext);
}

export function FavoritesContextProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const paginatedFavorites = () => {
    const totalNumberPages = Math.ceil(favorites.length / 8);
    const moviePages = {};
    const pageIndex = [];
    let i = 1;
    let j = 0;
    while (i <= totalNumberPages) {
      const page = [];
      favorites.forEach((movie, index) => {
        if (index >= j && index < j + 8) {
          page.push(movie);
        }
      });
      moviePages[i] = page;
      pageIndex.push(i);
      j += 8;
      i++;
    }
    return { totalNumberPages, moviePages, pageIndex };
  };

  const { totalNumberPages, moviePages, pageIndex } = paginatedFavorites();

  return (
    <FavoritesContext.Provider
      value={{ totalNumberPages, moviePages, pageIndex, setFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
