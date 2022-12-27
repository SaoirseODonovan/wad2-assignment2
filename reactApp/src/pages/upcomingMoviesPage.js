import React, { useState, useEffect } from "react";
//, useContext
import PageTemplate from "../components/templateMovieListPage";
import {getUpcomingMovies} from '../api/tmdb-api';
import Spinner from '../components/spinner';
import MustWatchIcon from '../components/cardIcons/addToMustWatch'
import { useQuery } from 'react-query';
// would be used for pagination but was unable to get working
// import { NumberingContext } from "../contexts/numberingContext";


const UpcomingMoviesPage = (props) => {

  // const {setPageFunc} = useContext(NumberingContext);
  
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  //using the home page code here
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  const favourites = movies.filter((m) => m.favourite);
  localStorage.setItem("favourites", JSON.stringify(favourites));

    return(
        <PageTemplate 
        title="Upcoming Movies"
        movies={movies} 
        action={(movie) => {
          return <MustWatchIcon movie={movie} />
        }}
        />
    )
}

export default UpcomingMoviesPage;