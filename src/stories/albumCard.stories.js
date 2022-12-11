import React from "react";
import AlbumCard from "../components/albumCard";
import SampleAlbumData from "./sampleAlbumData"; //NEED TO DO THIS
import { MemoryRouter } from "react-router";
import AlbumsContextProvider from "../contexts/albumsContext";
import { action } from "@storybook/addon-actions";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Home Page/AlbumCard",
  component: AlbumCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AlbumsContextProvider>{Story()}</AlbumsContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <AlbumCard
      album={SampleAlbumData}
      action={(album) => <AddToFavouritesIcon album={album} />}
      taging={(album) => null}
    />
  );
};
Basic.storyName = "Default";

export const Exceptional = () => {
  const sampleNoPoster = { ...SampleAlbumData, poster_path: undefined };
  return (
    <AlbumCard
      album={sampleNoPoster}
      action={(album) => <AddToFavouritesIcon album={album} />}
      taging={(album) => null}
    />
  );
};
Exceptional.storyName = "exception";
