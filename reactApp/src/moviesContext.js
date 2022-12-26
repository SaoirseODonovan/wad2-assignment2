//not certain if this page has been modified correctly, return later!
import React, { useState, createContext, useEffect, useReducer } from "react";
import { getMovies } from "./api/movie-api";
import { getTrendingMovies } from "./api/movie-api";
import { getUpcomingMovies } from "./api/movie-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { movies: action.payload.result};
    case "loadUpcomingMovies":
      return { upcoming: action.payload.result};
    case "loadTrendingMovies":
      return { trending: action.payload.result};
      default:
        return state;
      
  }
};

const MoviesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], trending: []});
  const [authenticated, setAuthenticated] = useState(false);

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

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        trending: state.trending,
        setAuthenticated
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider