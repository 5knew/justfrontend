import React, { createContext, useState } from 'react';
import { Products } from './Products'; // Импорт Products как массива

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favProducts, setFavProducts] = useState([]);

  const addToFavorite = (productToAdd) => {
    setFavProducts((prevFavProducts) => {
      const isProductInFav = prevFavProducts.find(p => p.id === productToAdd.id);
      if (!isProductInFav) {
        console.log("Adding to favorites:", productToAdd);
        return [...prevFavProducts, productToAdd];
      }
      return prevFavProducts;
    });
  };
  

  return (
    <FavoritesContext.Provider value={{ favProducts, addToFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
