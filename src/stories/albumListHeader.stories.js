import React from "react";
import AlbumListHeader from "../components/headerAlbumList";

export default {
  title: "Home Page/Header",
  component: AlbumListHeader,
};

export const Basic = () => <AlbumListHeader title={'Find New Tunes!'} />;

Basic.storyName = "Default";