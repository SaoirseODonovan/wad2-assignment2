//same as addToFavourites page with name changes and altered context 
import React, { useContext } from "react";
import { MovieActorContext } from "../../contexts/movieActorContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToMovieActorFavouritesIcon = ({ actors }) => {
  const context = useContext(MovieActorContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(actors);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToMovieActorFavouritesIcon;