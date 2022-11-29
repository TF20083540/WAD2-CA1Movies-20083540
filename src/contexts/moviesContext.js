import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [wishlist, setWishlist] = useState( [] ) // Part 4 Exercise 2 & 4

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addToWishlist = (movie) => { //New Part 4 exercise 4
    let newWishlist = [...wishlist];
    if (!wishlist.includes(movie.id)) {
      newWishlist.push(movie.id);
    }
    setWishlist(newWishlist);
  };

  // We will use this function in a later section
  const removeFromWishlist = (movie) => { //New part 4 exercise 4
    setWishlist( wishlist.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;