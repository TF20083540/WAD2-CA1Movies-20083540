import React from "react";
import AlbumDetails from "../components/albumDetails";
import SampleAlbum from "./sampleData"; //NEED TO CHANGE THIS
import { MemoryRouter } from "react-router";
import AlbumsContextProvider from "../contexts/albumsContext";

export default {
    title: "Album Details Page/AlbumDetails",
    component: AlbumDetails,
    decorators: [
      (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
      (Story) => <AlbumsContextProvider>{Story()}</AlbumsContextProvider>,
    ],
  };
  
  export const Basic = () => <AlbumDetails album={SampleAlbum} />;
  
  Basic.storyName = "Default";
