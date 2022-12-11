import React from "react";
import Album from "../albumCard";
import Grid from "@mui/material/Grid";

const AlbumList = ( {albums, action }) => {
  let albumCards = albums.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Album key={m.id} album={m} action={action} />
    </Grid>
  ));
  return albumCards;
};

export default AlbumList;
