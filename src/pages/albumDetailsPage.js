import React from "react";
import { useParams } from 'react-router-dom';
import AlbumDetails from "../components/albumDetails/";
import PageTemplate from "../components/templateAlbumPage";
import { getAlbum } from '../api/album-api' //CHANGE ME TO rEAL NAME
import { useQuery } from "react-query";
import Spinner from '../components/spinner';


const AlbumPage = (props) => {
    const { id } = useParams();
  
    const { data: album, error, isLoading, isError } = useQuery(
      ["album", { id: id }],
      getAlbum
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }

    return (
    <>
      {album ? (
        <>
        
          <PageTemplate album={album}>
            <AlbumDetails album={album} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for album details</p>
      )}
    </>
  );
};

export default AlbumPage;
