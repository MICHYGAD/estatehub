import { useContext } from "react";
import { FavoritesContext } from "./FavoritesContext.js";

export function useFavorites() {
  return useContext(FavoritesContext);
}