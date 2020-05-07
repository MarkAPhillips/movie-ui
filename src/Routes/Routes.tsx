import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import {PopularMoviesList, TrendingMoviesList} from "../components";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={TrendingMoviesList} />
      <Route exact path="/popular" component={PopularMoviesList} />
      <Route exact path="/trending" component={TrendingMoviesList} />
    </Switch>
  );
}

