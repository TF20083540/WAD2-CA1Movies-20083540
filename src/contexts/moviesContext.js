import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [watchlist, setWatchlist] = useState( {} ) // Part 4 Exercise 2 & 4

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

  const addToWatchlist = (movie) => {
    let newWatchlist = [...watchlist];
    if (!watchlist.includes(movie.id)) {
      newWatchlist.push(movie.id);
    }
    setWatchlist(newWatchlist);
  };

  // We will use this function in a later section
  const removeFromWatchlist = (movie) => {
    setWatchlist( watchlist.filter(
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
        watchlist,
        addToWatchlist,
        removeFromWatchlist
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;