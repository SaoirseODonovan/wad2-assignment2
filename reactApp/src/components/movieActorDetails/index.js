import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";

// A Drawer component is either visible (open) or hidden. We control this with a boolean state variable - drawerOpen.

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieActorDetails = ({ actors }) => {  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        <b>Biography of {actors.name}</b>
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`Popularity rating: ${actors.popularity}`}
        />
        
        <Chip
         label={`Date of birth: ${actors.birthday}`}
        />

         <Chip
         label={`Birthplace: ${actors.place_of_birth}`}
        />

         <Chip
         label={`Best known for: ${actors.known_for_department}`}
        />

        </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() =>setDrawerOpen(true)}
        sx={{
          position: 'fixed',
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {/* <MovieReviews movie={movie} /> */}
      </Drawer>
      </>
  );
};
export default MovieActorDetails ;