import React from "react";  // useState/useEffect redundant 
import AlbumHeader from "../headerAlbum";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { getAlbumImages } from "../../api/album-api"; //CHANGE THIS
import { useQuery } from "react-query";
import Spinner from '../spinner'

const TemplateAlbumPage = ({ album, children }) => {
    const { data , error, isLoading, isError } = useQuery(
      ["images", { id: album.id }],
      getAlbumImages
    );
  
    if (isLoading) {
      return <Spinner />;
    }
  
    if (isError) {
      return <h1>{error.message}</h1>;
    }
    const images = data.posters 
  
    return (
    <>
      <AlbumHeader album={album} />

      <Grid container spacing={5} sx={{ padding: "15px" }}>
        <Grid item xs={3}>
          <div sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <ImageList 
                cols={1}>
                {images.map((image) => (
                    <ImageListItem key={image.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}  //This will likely need changing
                        alt={image.poster_path}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
          </div>
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateAlbumPage;