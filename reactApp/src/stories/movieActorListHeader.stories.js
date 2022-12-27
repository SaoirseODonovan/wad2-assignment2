import React from "react";
import MovieActorListHeader from "../components/headerMovieActor";

export default {
  title: "Movie Actor Details Page/MovieActorsListHeader",
  component: MovieActorListHeader,
};

export const Basic = () => <MovieActorListHeader actors={'Movie Actors'} />;

Basic.storyName = "Default";