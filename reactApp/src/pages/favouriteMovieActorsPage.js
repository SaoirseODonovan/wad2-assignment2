import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieActorsListPage";
import { MovieActorContext } from "../contexts/movieActorContext";
import { useQueries } from "react-query";
import { getMovieActor } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromFavourites from "../components/cardIcons/removeFromMovieActorFavourites";

const FavouriteMovieActorsPage = () => {
  const {favourites: actorsIds } = useContext(MovieActorContext);

  // Create an array of queries and run in parallel.
  const favouriteMovieActorQueries = useQueries(
    actorsIds.map((actorsId) => {
      return {
        queryKey: ["actors", { id: actorsId }],
        queryFn: getMovieActor,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteMovieActorQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

   const actors = favouriteMovieActorQueries.map((q) => {
//     q.data.genre_ids = q.data.genres.map(g => g.id)
     return q.data });

  const toDo = () => true;

  return (
    <PageTemplate
      title="Favourite Movie Actors"
      actors={actors}
      action={(actors) => {
        return (
          <>
            <RemoveFromFavourites actors={actors} />
          </>
        );
      }}
    />
  );
};

export default FavouriteMovieActorsPage;

// import React from "react";

// const favouriteMovieActorsPage = () => {
//     return <h2>Favourite Movie Actors</h2>
// }

// export default favouriteMovieActorsPage;