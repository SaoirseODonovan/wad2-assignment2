import React, { useContext  } from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "../../pages/homePage";
import MoviePage from "../../pages/movieDetailsPage";
import Card from "@mui/material/Card";
import FavouriteMoviesPage from "../../pages/favouriteMoviesPage"; // NEW
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';
import { MoviesContext } from "../../moviesContext";

export default function MovieCard({ movie, action }){
  const { favourites, addToFavourites } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  const handleAddToFavourite = (e) => {
    e.preventDefault();
    addToFavourites(movie);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          movie.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {movie.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
      {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 360000,
//       refetchInterval: 360000, 
//       refetchOnWindowFocus: false
//     },
//   },
// });

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//     <BrowserRouter>
//     <AuthProvider>
//       <SiteHeader />      {/* New Header  */}
//       <MoviesContextProvider>
//         <MovieActorContextProvider>
//       <Routes>
//       <Switch>
//       <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
//         <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
//         <Route path="/movies/:id" element={<MoviePage />} />
//         <Route path="/" element={<HomePage />} />
//         <Route path="*" element={ <Navigate to="/" /> } />
//         {/* page=:pageNumber */}
//         <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
//         <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
//         <Route path="/movies/popular" element={<PopularMoviesPage />} />
//         <Route path="/movies/toprated" element={<TopRatedMoviesPage />} /> 
//         <Route path="/movies/trending" element={<TrendingMoviesPage />} />
//         <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
//         <Route path="/actors/" element={<MovieActorsPage />} />
//         <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
//         <Route path="/actors/favourites" element={<FavouriteMovieActorsPage />} />
//           <Route path="/public" component={PublicPage} />
//           <Route exact path="/" component={HomePage} />
//           <Route path="/login" component={LoginPage} />
//           <Route path="/signup" component={SignUpPage} />
//           <PrivateRoute path="/movies" component={Movies} />
//           <PrivateRoute path="/profile" component={Profile} />
//           <Redirect from="*" to="/" />
//         </Switch>

//       </Routes>
//       </MovieActorContextProvider>
//       </MoviesContextProvider>
//       </AuthProvider>
//     </BrowserRouter>
//     <ReactQueryDevtools initialIsOpen={false} />
//     </QueryClientProvider>
//   );
// };

// const rootElement = createRoot( document.getElementById("root") )
// rootElement.render(<App /> );