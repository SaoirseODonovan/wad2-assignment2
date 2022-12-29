//not certain if this page has been modified correctly, return later!
import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "./api/movie-api";
import { getTrendingMovies } from "./api/movie-api";
import { getUpcomingMovies } from "./api/movie-api";
import { getTopRatedMovies } from "./api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    case "loadUpcomingMovies":
      return { upcoming: action.payload.result};
    case "loadTrendingMovies":
      return { trending: action.payload.result};
    case "loadTopRatedMovies":
      return { topRated: action.payload.result};
      default:
        return state;
      
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], trending: [] });
  const [authenticated, setAuthenticated] = useState(false);
  const [favourites, setFavourites] = useState( [] ) 
  const [myReviews, setMyReviews] = useState( [] )
  const [mustWatch, setMustWatch] = useState( [] )

  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };

  const addToMustWatch = (movie) => {
    let newMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      newMustWatch.push(movie.id);
    }
    setMustWatch(newMustWatch);
    console.log(newMustWatch)
  };

  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(result => {
      console.log(result);
      dispatch({ type: "loadUpcomingMovies", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getTrendingMovies().then(result => {
      console.log(result);
      dispatch({ type: "loadTrendingMovies", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getTopRatedMovies().then(result => {
      console.log(result);
      dispatch({ type: "loadTopRatedMovies", payload: {result}});
    });
  },[]);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        trending: state.trending,
        topRated: state.topRated,
        setAuthenticated,
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToMustWatch,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider
