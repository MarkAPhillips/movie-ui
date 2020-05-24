import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import { HomeContainer, Movie, Biography  } from "../components";

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
      <Route exact strict path="/bio/:id" >
        <Biography />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
}

