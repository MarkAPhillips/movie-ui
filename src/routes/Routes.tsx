import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import { PopularMoviesList, TrendingMoviesList } from "../components";
import { Movie } from "../components/Movie/Movie";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <TrendingMoviesList />
      </Route>
      <Route exact path="/popular" >
        <PopularMoviesList />
      </Route>
      <Route exact path="/trending" >
        <TrendingMoviesList />
      </Route>
      <Route exact strict path="/movie" >
        <Redirect to='/' />
      </Route>
      <Route exact strict path="/movie/:id" >
        <Movie />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

