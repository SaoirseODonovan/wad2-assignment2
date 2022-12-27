import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getSimilarMovies} from '../api/tmdb-api'
import AddToPlaylistIcon from '../components/cardIcons/addToMustWatch';
import { useParams } from 'react-router-dom';
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'
const SimilarMoviesPage = (props) => {
  const { id } = useParams();
  const { data: similar, error, isLoading, isError } = useQuery(
    // the cache entry key is a serializable array
    ["similar", { id: id }],
    getSimilarMovies
  );
  console.log(similar)
  if (isLoading) return <Spinner/>
  if (isError) return <h1>{error.message}</h1>
   const movies = similar.results;  // *******************
  // // console.log(data)
    const favorites = movies.filter(m => m.favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites))
  const mustWatch = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  return (
    <>
      {similar ? (
        <>
          <PageTemplate
          title="Similar Movies"
          movies={movies}
              action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
      />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};
export default SimilarMoviesPage;










