import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import genresRouter from './api/genres';
import upcomingMoviesRouter from './api/upcomingMovies';
import trendingMoviesRouter from './api/trendingMovies';
import topRatedMoviesRouter from './api/topRatedMovies';
import './db';
import './seedData';
import usersRouter from './api/users';
import passport from './authenticate';
import session from 'express-session';
// import authenticate from './authenticate';

dotenv.config();

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍. Here's the details: ${err.stack} `);
};

const app = express();

// replace app.use(session([... with the following:
app.use(passport.initialize());

const port = process.env.PORT;

app.use(express.json());


//session middleware
app.use(session({
    secret: 'ilikecake',
    resave: true,
    saveUninitialized: true
  }));

app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
// eslint-disable-next-line no-irregular-whitespace
// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcomingMovies', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
app.use('/api/upcomingMovies/:id', passport.authenticate('jwt', {session: false}), upcomingMoviesRouter);
app.use('/api/trendingMovies', passport.authenticate('jwt', {session: false}), trendingMoviesRouter);
app.use('/api/trendingMovies/:id', passport.authenticate('jwt', {session: false}), trendingMoviesRouter);
app.use('/api/topRatedMovies', passport.authenticate('jwt', {session: false}), topRatedMoviesRouter);
app.use('/api/topRatedMovies/:id', passport.authenticate('jwt', {session: false}), topRatedMoviesRouter);
app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

//update /api/Movie route
//app.use('/api/movies', authenticate, moviesRouter);