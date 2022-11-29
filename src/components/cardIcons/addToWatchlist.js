import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToWishlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    context.addToWishlist(movie);
  };

  return (
    <IconButton aria-label="add to wishlist" onClick={handleAddToWishlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToWishlistIcon;