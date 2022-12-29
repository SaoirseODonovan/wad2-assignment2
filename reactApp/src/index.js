import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage.js";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PopularMoviesPage from "./pages/popularMoviesPage.js";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage.js";
import TrendingMoviesPage from "./pages/trendingMoviesPage.js";
import SimilarMoviesPage from "./pages/similarMoviesPage.js";
import MovieActorsPage from "./pages/movieActorsPage.js";
import MovieActorDetailsPage from "./pages/movieActorDetailsPage";
import FavouriteMovieActorsPage from "./pages/favouriteMovieActorsPage";
import MovieActorContextProvider from "./contexts/movieActorContext";
import { PublicPage } from "./pages";
import LoginPage from "./pages/loginPage";
import AuthProvider from "./contexts/authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import SignUpPage from "./pages/signUpPage";


//Immediately after the import statements, declare the query client (it will manage the cache in the browser)
//The above configuration will retain all data in the cache for 1 hour before it becomes invalidated.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader />      {/* New Header  */}
      <MoviesContextProvider>
        <MovieActorContextProvider>
      <Routes>
        {/* return to add private routes  */}
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        {/* page=:pageNumber */}
        <Route exact path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/movies/toprated" element={<TopRatedMoviesPage />} /> 
        <Route path="/movies/trending" element={<TrendingMoviesPage />} />
        <Route path="/movies/:id/similar" element={<SimilarMoviesPage />} />
        <Route path="/actors/" element={<MovieActorsPage />} />
        <Route path="/actors/:id" element={<MovieActorDetailsPage />} />
        <Route path="/actors/favourites" element={<FavouriteMovieActorsPage />} />
        <Route path="/public" element={<PublicPage />} /> 
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </MovieActorContextProvider>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Redirect, Navigate, Routes, Link } from "react-router-dom";
// import { PublicPage, Movies, Profile, HomePage } from "./pages";
// import LoginPage from "./loginPage";
// import AuthProvider from "./authContext";
// import PrivateRoute from "./privateRoute";
// import AuthHeader from "./authHeader";
// import SignUpPage from "./signUpPage";
// import MovieProvider from "./moviesContext";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <AuthHeader />
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/public">Public</Link>
//           </li>
//           <li>
//             <Link to="/movies">Movies</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//         <MovieProvider>
//         <Routes>
//           <Route path="/public" component={PublicPage} />
//           <Route exact path="/" component={HomePage} />
//           <Route path="/login" component={LoginPage} />
//           <Route path="/signup" component={SignUpPage} />
//           <Route path="/movies" component={Movies} />
//           <Route path="/profile" component={Profile} />
//           {/* <Navigate from="*" to="/" /> */}
//         </Routes>
//         </MovieProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));