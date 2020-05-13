import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import { PopularMoviesList, TrendingMoviesList } from "../components";
import { Movie } from "../components/Movie/Movie";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TrendingMoviesList} />
      <Route exact path="/popular" component={PopularMoviesList} />
      <Route exact path="/trending" component={TrendingMoviesList} />
      <Route exact path="/movie/:id" component={Movie} />
      <Redirect to='/' />
    </Switch>
  );
}

