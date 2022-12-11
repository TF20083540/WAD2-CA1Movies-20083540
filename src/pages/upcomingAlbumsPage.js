import React from "react";
import { getUpcomingAlbums } from "../api/album-api"; //EMMEBE TO CHANGE TOT HE ACUTAL API KEY NAME
import PageTemplate from '../components/templateAlbumListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToListenlist';

const UpcomingAlbumsPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingAlbums)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const albums = data.results;

  // Redundant, but necessary to avoid app crashing.
  const listenlist = albums.filter(m => m.listlist)
  localStorage.setItem('listenlist', JSON.stringify(listenlist))
  const addToListenlist = (albumId) => true 

  return (
    <PageTemplate
      title="Upcoming Albums"
      albums={albums}
      action={(album) => {
        return <PlaylistAddIcon album={album} />
      }}
    />
  );
};
export default UpcomingAlbumsPage;