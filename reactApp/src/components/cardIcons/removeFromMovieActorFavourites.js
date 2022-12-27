import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MovieActorContext } from "../../contexts/movieActorContext";

const RemoveFromMovieActorFavouritesIcon = ({ actors }) => {
  const context = useContext(MovieActorContext);

  const handleRemoveFromFavourites = (e) => {
    e.preventDefault();
    context.removeFromFavourites(actors);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavourites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromMovieActorFavouritesIcon;