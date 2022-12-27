import React from "react";
import MovieActorDetails from "../components/movieActorDetails";
import sampleActorData from "./sampleActorData";
import { MemoryRouter } from "react-router";
import MovieActorContextProvider from "../contexts/movieActorContext";
//import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Actor Details Page/MovieActorDetails",
  component: MovieActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MovieActorContextProvider>{Story()}</MovieActorContextProvider>,
  ],
};

export const Basic = () => <MovieActorDetails actors={sampleActorData} />;

Basic.storyName = "Default";
