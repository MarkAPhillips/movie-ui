import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import { HomeContainer, Movie } from "../components";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeContainer />
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

