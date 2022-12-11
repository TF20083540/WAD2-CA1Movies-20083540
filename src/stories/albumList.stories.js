import React from "react";
import AlbumList from "../components/albumList";
import SampleAlbumData from "./sampleAlbumData"; //Change this
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import Grid from "@mui/material/Grid";
import AlbumsContextProvider from "../contexts/albumsContext";

export default {
  title: "Home Page/AlbumList",
  component: AlbumList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AlbumsContextProvider>{Story()}</AlbumsContextProvider>,
  ],
};

export const Basic = () => {
  const albums = [
    { ...SampleAlbumData, id: 1 },
    { ...SampleAlbumData, id: 2 },
    { ...SampleAlbumData, id: 3 },
    { ...SampleAlbumData, id: 4 },
    { ...SampleAlbumData, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <AlbumList
        albums={albums}
        action={(album) => <AddToFavouritesIcon movie={album} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";
