import React, { useContext } from "react";
import PageTemplate from "../components/templateAlbumListPage";
import { AlbumsContext } from "../contexts/albumsContext";
import { useQueries } from "react-query";
import { getAlbum } from "../api/album-api"; //change actual name later
import Spinner from '../components/spinner';
import RemoveFromWishlist from "../components/cardIcons/removeFromWishlist";
import WriteReview from "../components/cardIcons/writeReview";

const WishlistAlbumPage = () => {
  const {wishlist: albumIds } = useContext(AlbumsContext);

  // Create an array of queries and run in parallel.
  const wishlistAlbumQueries = useQueries(
    albumIds.map((movieId) => {
      return {
        queryKey: ["album", { id: movieId }], //This will be used to query the API call, remember to change the key!
        queryFn: getAlbum,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = wishlistAlbumQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const albums = wishlistAlbumQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="User Wishlist"
      albums={albums}
      action={(album) => {
        return (
          <>
            <RemoveFromWishlist album={album} />
            <WriteReview album={album} />
          </>
        );
      }}
    />
  );
};

export default WishlistAlbumPage;
