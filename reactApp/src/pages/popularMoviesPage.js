import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch'
import {getPopularMovies} from '../api/tmdb-api'

const PopularMoviesPage = (props) => {
    const {data, error, isLoading, isError}  = useQuery('popular', getPopularMovies)
  
    if (isLoading) return <Spinner/>
    if (isError) return <h1>{error.message}</h1>
    const movies = data.results;
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  
    const mustWatch = movies.filter(m => m.mustWatch)
    localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  
    return (
      <PageTemplate
        title="Popular Movies"
        movies={movies}
        action={(movie) => {
          return <AddToPlaylistIcon movie={movie} />
      }}
      />
    );
  };
  export default PopularMoviesPage; 