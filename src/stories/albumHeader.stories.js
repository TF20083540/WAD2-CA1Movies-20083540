import React from "react";
import AlbumHeader from "../components/headerAlbum";
import SampleAlbum from "./sampleData"; //CHANGE THIS
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Album Details Page/AlbumHeader",
  component: AlbumHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <AlbumHeader movie={SampleAlbum} />;

Basic.storyName = "Default";
