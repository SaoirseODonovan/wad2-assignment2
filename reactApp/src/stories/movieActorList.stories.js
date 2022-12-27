import React from "react";
import MovieActorList from "../components/movieActorList";
import sampleActorData from "./sampleActorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";
import Grid from "@mui/material/Grid";
import MovieActorContextProvider from "../contexts/movieActorContext";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

export default {
  title: "Movie Actor Details Page/MovieActorList",
  component: MovieActorList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MovieActorContextProvider>{Story()}</MovieActorContextProvider>,
  ],
};

export const Basic = () => {
  const actors = [
    { ...sampleActorData, id: 1 },
    { ...sampleActorData, id: 2 },
    { ...sampleActorData, id: 3 },
    { ...sampleActorData, id: 4 },
    { ...sampleActorData, id: 5 },
  ];
  return (
    <Grid container spacing={5}>
      <MovieActorList
        actors={actors}
        action={(actors) => <AddToFavouritesIcon actors={actors} />}
      />
    </Grid>
  );
};
Basic.storyName = "Default";