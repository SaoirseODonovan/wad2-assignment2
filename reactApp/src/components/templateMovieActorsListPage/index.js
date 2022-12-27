import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import MovieActorList from "../movieActorList";

function MovieActorsListPageTemplate({ actors, title, action }) {
  const [nameFilter, setNameFilter] = useState("");

  let displayedMovieActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
 console.log(displayedMovieActors)
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
          />
        </Grid>
        <MovieActorList action={action} actors={displayedMovieActors}></MovieActorList>
      </Grid>
    </Grid>
  );
}
export default MovieActorsListPageTemplate;