import React from "react";
import MovieActorHeader from "../components/headerMovieActor"
import { MemoryRouter } from "react-router";
import sampleActorData from "./sampleActorData";
import MovieActorContextProvider from "../contexts/movieActorContext";

export default {
  title: "Movie Actor Details Page/MovieActorHeader",
  component: MovieActorHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MovieActorContextProvider>{Story()}</MovieActorContextProvider>,
  ],
};

export const Basic = () => <MovieActorHeader title="Movie Actors" />;

Basic.storyName = "Default";
