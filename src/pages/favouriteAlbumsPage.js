import React, { useContext } from "react";
import PageTemplate from "../components/templateAlbumListPage";
import { AlbumsContext } from "../contexts/albumsContext";
import { useQueries } from "react-query";
import { getAlbum } from "../api/album-api"; //CHANGE THE API KEY NAME TO CORRECT NAME
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteAlbumsPage = () => {
  const {favourites: albumIds } = useContext(AlbumsContext);

  // Create an array of queries and run in parallel.
  const favouriteAlbumQueries = useQueries(
    albumIds.map((albumId) => {
      return {
        queryKey: ["album", { id: albumId }],
        queryFn: getAlbum,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteAlbumQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const albums = favouriteAlbumQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id) //need changing due to formatting, check later.
    return q.data
  });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Albums"
      albums={albums}
      action={(album) => {
        return (
          <>
            <RemoveFromFavourites album={album} />
            <WriteReview album={album} />
          </>
        );
      }}
    />
  );
};

export default FavouriteAlbumsPage;
