import React, { useState } from "react";

export const AlbumsContext = React.createContext(null);

const AlbumsContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [wishlist, setWishlist] = useState( [] )

  const addToFavourites = (album) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(album.mbid)) {
      newFavourites.push(album.mbid);
    }
    setFavourites(newFavourites);
  };

  const removeFromFavourites = (album) => {
    setFavourites( favourites.filter(
      (mId) => mId !== album.mbid
    ) )
  };

  const addToWishlist = (album) => { //New Part 4 exercise 4
    let newWishlist = [...wishlist];
    if (!wishlist.includes(album.mbid)) {
      newWishlist.push(album.mbid);
    }
    setWishlist(newWishlist);
  };

  // We will use this function in a later section
  const removeFromWishlist = (album) => { //New part 4 exercise 4
    setWishlist( wishlist.filter(
      (mId) => mId !== album.mbid
    ) )
  };

  const addReview = (album, review) => {
    setMyReviews( {...myReviews, [album.mbid]: review } )
  };

  return (
    <AlbumsContext.Provider
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
    </AlbumsContext.Provider>
  );
};

export default AlbumsContextProvider;