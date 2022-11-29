import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromWishlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromWishlist = (e) => {
    e.preventDefault();
    context.removeFromWishlist(movie);
  };
  return (
    <IconButton
      aria-label="remove from wishlist"
      onClick={handleRemoveFromWishlist}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromWishlistIcon;