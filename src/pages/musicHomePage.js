import React from "react";
import { getAlbums } from "../api/album-api";
import PageTemplate from '../components/templateAlbumListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const MusicHomePage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('chart.gettopartists', getAlbums)
  console.log(useQuery('chart.gettopartists',getAlbums))
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const albums = data.artists.artist;
  console.log(albums);
  // Redundant, but necessary to avoid app crashing.
  const favourites = albums.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  return (
    <PageTemplate
      title="Find new tunes!"
      albums={albums}
      action={(album) => {
        return <AddToFavouritesIcon album={album} />
      }}
    />
  );
};
export default MusicHomePage;