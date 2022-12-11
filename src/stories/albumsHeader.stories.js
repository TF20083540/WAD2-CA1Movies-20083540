import React from "react";
import AlbumsHeader from "../components/headerAlbumList";
import { MemoryRouter } from "react-router";
import AlbumsContextProvider from "../contexts/albumsContext";

export default {
  title: "Home Page/AlbumPageHeader",
  component: AlbumsHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <AlbumsContextProvider>{Story()}</AlbumsContextProvider>,
  ],
};

export const Basic = () => <AlbumsHeader title="Find New Tunes!" />;

Basic.storyName = "Default";
