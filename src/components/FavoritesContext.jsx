import { useEffect, useState } from "react";
import { FavoritesContext } from "./FavoritesContext.js";

// export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (property) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (item) => item.id === property.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (item) => item.id !== property.id
        );
      }

      return [...currentFavorites, property];
    });
  };

  const isFavorite = (propertyId) => {
    return favorites.some((item) => item.id === propertyId);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

