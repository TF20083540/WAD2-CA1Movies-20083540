import React, { useContext } from "react";
import { AlbumsContext } from "../../contexts/albumsContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToListenlistIcon = ({ album }) => {
  const context = useContext(AlbumsContext);

  const handleAddToListenlist = (e) => {
    e.preventDefault();
    context.addToListenlist(album);
  };

  return (
    <IconButton aria-label="add to listenlist" onClick={handleAddToListenlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToListenlistIcon;